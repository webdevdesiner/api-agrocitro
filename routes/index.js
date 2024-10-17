const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');

router.get('/ping', (req, res) => {
    res.json({
        "pong": "true"
    })
})
router.post('/plantio', AuthController.criar)
router.get('/plantio', AuthController.listar)

module.exports = router