const express = require('express');
const productRouter = require('./routes/productsRoutes.js');
const reviewsRouter = require('./routes/reviewsRouter.js');
const userRouter = require('./routes/userRouter.js');
const mongoose = require('mongoose');
const app = express();
const test = require('./models/productsModel.js');
app.use(express.json());
app.use('/api/products', productRouter);
app.use('/api/products/reviews',reviewsRouter);

app.use('/api/products/users',userRouter);


const url = 'mongodb+srv://$_USERNAME_$:$_PASSWORD_$@cluster0.ndcos1w.mongodb.net/$_DB_NAME_$'
const databaseUser = 'dishagupta9122002';
const databasePassword = 'disha123';
const databaseName = 'Amazon-backend';

let dbLink = url.replace("$_USERNAME_$", databaseUser)
    .replace("$_PASSWORD_$", databasePassword)
    .replace("$_DB_NAME_$", databaseName);

mongoose.connect(dbLink)
    .then(() => console.log('Connected!😎'))
    .catch((error)=>{
        console.log("error occured in connecting in db",error)
    });

app.listen(1400, () => {
    console.log("server is running 🤗")
});