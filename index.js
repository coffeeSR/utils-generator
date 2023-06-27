const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const ejs = require("ejs");

const app = express();

const indexRouter = require("./routes");

// app.use((req,res,next)=>{
//     console.log("Request Received at " +Date.now());
//     next();
// });

//setting up the third party middleware
app.use(morgan("short"));
app.use(cors());

//setting up the ejs templating
app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/",indexRouter);

app.listen(8000, () => {
    console.log("Server running on port 8000");
});