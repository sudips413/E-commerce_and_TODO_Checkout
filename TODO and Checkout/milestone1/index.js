const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');



dotenv.config();
mongoose 
.connect(

    process.env.URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)
.then(() => console.log('DB Connected!'))
.catch(err => {
    console.log(`DB Connection Error: ${err.message}`);
});
app.use(cors());
app.use(bodyParser.json());


app.use('/api', require('./routes/Todo'));














app.listen(4000, () => {
    console.log('Server started on port 4000');
    }
);
