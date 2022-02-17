const express = require('express');
const app = express();

app.get('/', (req, res) => res.json({
    status: 200,
    message: 'Hello World con Express',
}))

app.listen('3000', () => {
    console.log('servidor corriente en el puerto 3000')
})