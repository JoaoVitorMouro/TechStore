const Pedido = require('../models/Pedido');
const Produto = require('../models/Produto');

exports.addPedido = async (req, res) => {
  try {

    const produto = await Produto.findById(req.body.produtoId);
    
    if (!produto) {
      return res.status(404).json({ message: 'Produto não encontrado no DB...' });
    }

    const pedido = new Pedido(req.body);
    await pedido.save(); //precisa do await

    res.status(201).json({ message: 'Pedido salvo com sucesso!' });
  } catch (err) {
    res.status(400).json({ message: 'Verifique as informações..', error: err.message });
  }
};

exports.listPedidos = async (req, res) => {
  try {
    const pedido = await Pedido.find(); // SEMPRE precisa do  await
    res.status(200).json({ message: 'Lista de Pedidos salvos', Pedidos: pedido });
  } catch (err) {
    res.status(400).json({ message: 'Verifique as informações..', error: err.message });
  }
};

exports.getPedidoById = async (req, res) => {
  console.log(req.params.id);

  try {
    const pedido = await Pedido.findById(req.params.id);
    if (!pedido) {
      res.status(404).json({ message: 'Pedido não encontrado no DB...' });
    } else {
      res.status(200).json({ message: 'Lista de Pedidos salvos', Pedido: pedido });
    }
  } catch (err) {
    res.status(400).json({ message: 'Verifique as informações..', error: err.message });
  }
};

exports.updatePedidoById = async (req, res) => {
  console.log(req.body);
  console.log(req.params.id);

  try {

    if(req.body.produtoId != null){
        const produto = await Produto.findById(req.body.produtoId);
    
        if (!produto) {
        return res.status(404).json({ message: 'Produto não encontrado no DB...' });
        }
    }
    
    const pedido = await Pedido.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!Pedido) {
      res.status(404).json({ message: 'Pedido não encontrado no DB...' });
    } else {
      res.status(201).json({ message: 'Pedido editado com sucesso!', Pedido: pedido });
    }
  } catch (err) {
    res.status(400).json({ message: 'Verifique as informações..', error: err.message });
  }
};

exports.deletePedidoById = async (req, res) => {
  try {
    const pedido = await Pedido.findByIdAndDelete(req.params.id);
    if (!pedido) {
      res.status(404).json({ message: 'Pedido não encontrado no DB' });
    } else {
      res.status(200).json({ message: 'Pedido excluido com sucesso!' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Verifique as informações..', error: err.message });
  }
};
