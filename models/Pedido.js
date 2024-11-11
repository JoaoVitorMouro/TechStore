//importar o mongoose
const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
    produtoId: { type: String, required: true },
    quantidade: { type: Number, required: true },
    data: { type: String, required: true },
});

//
const Pedido = mongoose.model('pedido', pedidoSchema);
module.exports = Pedido;



