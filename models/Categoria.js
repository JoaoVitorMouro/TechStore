//importar o mongoose
const mongoose = require('mongoose');

const categoriaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
});

//
const Categoria = mongoose.model('categoria', categoriaSchema);
module.exports = Categoria;



