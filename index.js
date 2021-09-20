var server = require('./config/server')
var bancodedados = require('./config/bancodedados')

var app = server.app
var porta = server.porta

var conexao = bancodedados.conexao
var documentos = bancodedados.documentos

app.set('view engine',"ejs")

//abrir o form.ejs
app.get('/',(req,res)=>{
    conexao()
    documentos.find().sort({"_id":-1})
    .then((documentos)=>{
        console.log(documentos)
        res.render("form", {documentos})
    })
})

//gravar as informações do formulario form.ejs
app.post('/gravar',(req,res)=>{
    var dados = req.body

    conexao()

    new documentos({
        mensagem:dados.mensagem,
        nome:dados.nome,
        cargo:dados.cargo
    }).save()
    //res.send('informações enviadas')
    .then((documento)=>{
        res.redirect('/')
    })
})

//excluir uma mensagem
app.get('/excluir',(req,res)=>{
    var id = req.query.id
    conexao()
    documentos.findOneAndRemove({_id:id})
    .then((documentos)=>{
        res.redirect('/')
    })
   
})

app.listen(porta)