import express from "express";
import mongoose from 'mongoose';
import Routes from './routes/routes';
require('dotenv').config();

 
const app = express();
var cors = require('cors');
app.use(express.json());

app.use(cors());


app.use('/api/medals',Routes.Medals);
app.use('/api/claps',Routes.Claps);
app.use('/api/schedule',Routes.Schedule);

mongoose
    .connect(
      `mongodb://${process.env.name}:${process.env.password}@cluster0-shard-00-00.dm1xw.mongodb.net:27017,cluster0-shard-00-01.dm1xw.mongodb.net:27017,cluster0-shard-00-02.dm1xw.mongodb.net:27017/${process.env.db}?ssl=true&replicaSet=atlas-x6eag6-shard-0&authSource=admin&retryWrites=true&w=majority`,
      { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true }
      
    )
    .then(() => {
      console.log('listening at port',process.env.PORT || 5001 )
      app.listen(process.env.PORT || 5001);
    })
    .catch(err => {
      console.log(err);
    });
  