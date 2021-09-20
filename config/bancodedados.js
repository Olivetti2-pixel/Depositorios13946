var mongoose = require('mongoose')

var conexao = ()=>{
     var caminho = mongoose.connect("mongodb+srv://MongoDBUser:Palmitoenlatado12@cluster0.koij7.mongodb.net/mongoatlas?retryWrites=true&w=majority")
}

var schema = mongoose.Schema

var depoimentos = new schema({
    mensagem:String,
    nome:String,
    cargo:String
})

var documentos = mongoose.model('depoimentos',depoimentos)

module.exports = {conexao, documentos}