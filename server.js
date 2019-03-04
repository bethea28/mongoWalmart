import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import usersRouter from './Routes/usersRouter';
import itemRouter from './Routes/itemRouter';
const app = express();
const port = process.env.PORT || 4000;
// Connecting to the database
const db = mongoose.connect("mongodb://oc:Javaninja1~@ds151941.mlab.com:51941/bryandatabase", { useNewUrlParser: true });

// setting body parser middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API routes
app.use('/api/walmart', usersRouter);
app.use('/api/walmart/item', itemRouter);

// Running the server
app.listen(port, () => {
	console.log(`http://localhost:${port}`)
})

