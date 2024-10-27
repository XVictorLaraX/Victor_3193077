const express = require('express');
const path = require('path');
const app = express();
const mainRouter = require('./Routes/mainRouter');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', mainRouter);

const PORT = 3009;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
