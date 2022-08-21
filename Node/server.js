let express = require('express');
let app = express();
require('dotenv').config();
let mongoose = require('mongoose');

// Database connection:-
mongoose.connect(process.env.MONGO_CONNECTION_URL)
.then(() => {
    console.log('Database connection established...');
})
.catch((err) => {
    console.log(err);
})

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

require('./routes/web')(app)

//Server Listening
let PORT = process.env.PORT
const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})