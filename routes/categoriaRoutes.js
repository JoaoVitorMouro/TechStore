//Para utitlizar o Router do express faremos assim;
const express = require('express');
const router = express.Router();
const {
  addCategoria,
  listCategorias,
  getCategoriaById,
  updateCategoriaById,
  deleteCategoriaById,
} = require('../controllers/CategoriaController');
const verifyJWTMiddleware = require('../middleware/verifyJWTMiddleware');

//Minhas rotas ==>

//rotas
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Categorias' });
});

router.post('/categoria', verifyJWTMiddleware, addCategoria); //protegida

router.get('/categorias', listCategorias);

router.get('/categoria/:id', getCategoriaById);

router.patch('/categoria/:id', verifyJWTMiddleware, updateCategoriaById); //protegida

router.delete('/categoria/:id', verifyJWTMiddleware, deleteCategoriaById); //protegida

module.exports = router;
