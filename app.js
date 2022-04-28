const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

mongoose.connect('mongodb+srv://lamial:database@clusterfs.1hviv.mongodb.net/newappi', 
{
   useNewUrlParser: true,
   useUnifiedTopology: true,
})
.then(() => console.log("Bienvenue sur MongoDB"))
.catch((err) => console.log("Failed to connect", err))

//TODO

app.listen(4000, () => {
  console.log("Server started on port 4000");
});