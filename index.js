import express from "express";
import bodyParser from "body-parser"

import path from "path";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// 🔧 Setări pentru EJS și views
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index.ejs");
})

app.post("/submit",(req,res)=>{
    console.log(req.body);
    console.log(req.body["firstName"]);
    console.log(req.body["lastName"]);
    console.log(req.body["mesaj"]);
    console.log(req.body["password"]);
    const data = {
        firstName: req.body["firstName"],
        lastName: req.body["lastName"],
        message: req.body["mesaj"],
        password: req.body["password"]
    };
    res.render("submit.ejs",data);
})


app.listen(port, () => {
    console.log(`Successfully listening on port ${port}.`);
});