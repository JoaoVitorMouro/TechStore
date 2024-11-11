const Categoria = require('../models/Categoria');

exports.addCategoria = async (req, res) => {
  try {
    const categoria = new Categoria(req.body);
    await categoria.save(); //precisa do await

    res.status(201).json({ message: 'Categoria salvo com sucesso!' });
  } catch (err) {
    res.status(400).json({ message: 'Verifique as informações..', error: err.message });
  }
};

exports.listCategorias = async (req, res) => {
  try {
    const categoria = await Categoria.find(); // SEMPRE precisa do  await
    res.status(200).json({ message: 'Lista de Categorias salvos', Categorias: categoria });
  } catch (err) {
    res.status(400).json({ message: 'Verifique as informações..', error: err.message });
  }
};

exports.getCategoriaById = async (req, res) => {
  console.log(req.params.id);

  try {
    const categoria = await Categoria.findById(req.params.id);
    if (!categoria) {
      res.status(404).json({ message: 'Categoria não encontrado no DB...' });
    } else {
      res.status(200).json({ message: 'Lista de Categorias salvos', Categoria: categoria });
    }
  } catch (err) {
    res.status(400).json({ message: 'Verifique as informações..', error: err.message });
  }
};

exports.updateCategoriaById = async (req, res) => {
  console.log(req.body);
  console.log(req.params.id);

  try {
    const categoria = await Categoria.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!Categoria) {
      res.status(404).json({ message: 'Categoria não encontrado no DB...' });
    } else {
      res.status(201).json({ message: 'Categoria editado com sucesso!', Categoria: categoria });
    }
  } catch (err) {
    res.status(400).json({ message: 'Verifique as informações..', error: err.message });
  }
};

exports.deleteCategoriaById = async (req, res) => {
  try {
    const categoria = await Categoria.findByIdAndDelete(req.params.id);
    if (!categoria) {
      res.status(404).json({ message: 'Categoria não encontrado no DB' });
    } else {
      res.status(200).json({ message: 'Categoria excluido com sucesso!' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Verifique as informações..', error: err.message });
  }
};
