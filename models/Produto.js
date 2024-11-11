//importar o mongoose
const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  preco: { type: String, required: true },
  categoriaId: { type: String, required: true },
});

//
module.exports = mongoose.model('produto', produtoSchema);
// module.exports = Produto;

/**
 * Outra  forma de export
 * module.exports = mongoose.model('Book', bookSchema);
 */
