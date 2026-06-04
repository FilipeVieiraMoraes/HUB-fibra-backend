const express = require('express');
const router = express.Router();
const { listarEmpresas, buscarEmpresa, criarEmpresa,
        atualizarEmpresa, deletarEmpresa } = require('./controllers/empresaControlador');

router.get('/', listarEmpresas);
router.get('/:id', buscarEmpresa);
router.post('/', criarEmpresa);
router.put('/:id', atualizarEmpresa);
router.delete('/:id', deletarEmpresa);

module.exports = router;