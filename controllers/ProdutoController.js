const Categoria = require('../models/Categoria');
const Produto = require('../models/Produto');


exports.addProduto = async (req, res) => {
  try {
    const categoria = await Categoria.findById(req.body.categoriaId);
    
    if (!categoria) {
      return res.status(404).json({ message: 'Categoria não encontrado no DB...' });
    }

    const produto = new Produto(req.body);
    await produto.save(); //precisa do await

    res.status(201).json({ message: 'Produto salvo com sucesso!' });
  } catch (err) {
    res.status(400).json({ message: 'Verifique as informações..', error: err.message });
  }
};

exports.listProdutos = async (req, res) => {
  try {
    const produto = await Produto.find(); // SEMPRE precisa do  await
    res.status(200).json({ message: 'Lista de Produtos salvos', Produtos: produto });
  } catch (err) {
    res.status(400).json({ message: 'Verifique as informações..', error: err.message });
  }
};

exports.getProdutoById = async (req, res) => {
  console.log(req.params.id);

  try {
    const produto = await Produto.findById(req.params.id);
    if (!Produto) {
      res.status(404).json({ message: 'Produto não encontrado no DB...' });
    } else {
      res.status(200).json({ message: 'Lista de Produtos salvos', Produto: produto });
    }
  } catch (err) {
    res.status(400).json({ message: 'Verifique as informações..', error: err.message });
  }
};

exports.updateProdutoById = async (req, res) => {
  console.log(req.body);
  console.log(req.params.id);

  try {
    if(req.body.categoriaId != null){
      const categoria = await Categoria.findById(req.body.categoriaId);
    
      if (!categoria) {
        return res.status(404).json({ message: 'Categoria não encontrado no DB...' });
      }
    }
    const produto = await Produto.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!produto) {
      res.status(404).json({ message: 'Produto não encontrado no DB...' });
    } else {
      res.status(201).json({ message: 'Produto editado com sucesso!', Produto: produto });
    }
  } catch (err) {
    res.status(400).json({ message: 'Verifique as informações..', error: err.message });
  }
};

exports.deleteProdutoById = async (req, res) => {
  try {
    const produto = await Produto.findByIdAndDelete(req.params.id);
    if (!produto) {
      res.status(404).json({ message: 'Produto não encontrado no DB' });
    } else {
      res.status(200).json({ message: 'Produto excluido com sucesso!' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Verifique as informações..', error: err.message });
  }
};
