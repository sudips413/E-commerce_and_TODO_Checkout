const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
     



dotenv.config();

// Import Routes

const guestroute = require('./routes/GuestUser');

const ItemControlroute = require('./routes/ItemRoute');


//connect to MongoDB
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        

    })
  .then(() => console.log('DB Connected!'))
  .catch(err => {
    console.log(`DB Connection Error: ${err.message}`);
    });



app.use(bodyParser.json());
app.get('/',(req,res)=>{
    res.send("Hello World");
})
app.use('/api',guestroute); 
app. use('/api',ItemControlroute);

// Path: index.js port 3000

app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})