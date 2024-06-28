const express = require('express');
const mongoose = require('mongoose');
const stockRouter = require('./routes/StockRoutes')

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json());

mongoose.connect('mongodb+srv://<username>:<password>@<cluster>.pqhflna.mongodb.net/', {
    retryWrites: true,
    w: 'majority',
    appName: 'AulaWeb'
});

app.use('/api', stockRouter);

app.listen(PORT, () => {
});

console.log(`Server is running on port ${PORT}`);