//Para utitlizar o Router do express faremos assim;
const express = require('express');
const router = express.Router();
const {
  addPedido,
  listPedidos,
  getPedidoById,
  updatePedidoById,
  deletePedidoById,
} =  require('../controllers/PedidoController');
const verifyJWTMiddleware = require('../middleware/verifyJWTMiddleware');

//Minhas rotas ==>

//rotas
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Pedidos' });
});

router.post('/pedido', verifyJWTMiddleware, addPedido); //protegida

router.get('/pedidos', listPedidos);

router.get('/pedido/:id', getPedidoById);

router.patch('/pedido/:id', verifyJWTMiddleware, updatePedidoById); //protegida

router.delete('/pedido/:id', verifyJWTMiddleware, deletePedidoById); //protegida

module.exports = router;
