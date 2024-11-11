//Para utitlizar o Router do express faremos assim;
const express = require('express');
const router = express.Router();
const {
  addProduto,
  listProdutos,
  getProdutoById,
  updateProdutoById,
  deleteProdutoById,
} =  require('../controllers/ProdutoController');
const verifyJWTMiddleware = require('../middleware/verifyJWTMiddleware');

//Minhas rotas ==>

//rotas
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Produtos' });
});

router.post('/produto', verifyJWTMiddleware, addProduto); //protegida

router.get('/produtos', listProdutos);

router.get('/produto/:id', getProdutoById);

router.patch('/produto/:id', verifyJWTMiddleware, updateProdutoById); //protegida

router.delete('/produto/:id', verifyJWTMiddleware, deleteProdutoById); //protegida

module.exports = router;
