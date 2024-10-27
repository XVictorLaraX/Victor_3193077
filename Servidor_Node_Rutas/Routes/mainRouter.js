const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

router.get('/formulario', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'form.html'));
});

router.get('/informacion', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'info.html'));
});

module.exports = router;
