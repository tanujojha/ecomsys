const express = require('express');
const bcrypt = require('bcrypt');
const authRoute = require("./routes/auth.js");
const connectToMongo = require('./db');
const cors = require('cors');
const itemRoute = require("./routes/item.js");


const app = express();

connectToMongo();

app.use(cors());
app.use(express.json());


const port = 5000

//available routes
app.use("/api/auth", authRoute)
app.use("/api/items", itemRoute)

app.listen(port, ()=>{console.log(`server started on port ${port}`);})
