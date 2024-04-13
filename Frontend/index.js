import fs from 'fs';
import express from "express"
import bodyParser from "body-parser";
import { fileURLToPath } from 'url';
import { dirname }   from 'path';
import path from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log(__dirname)

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'views/')));
const port = 7000;
app.get('/', (req, res) => {
    res.render(__dirname+'/views/index.ejs');
});
// const absolutePath = path.join(__dirname, 'public','about','index.html');
app.get('/about',(req,res)=>{
    res.sendFile("about/index.html" )
})
app.get('/contact',(req,res)=>{
    res.sendFile("contact/index.html")
})

// viewblogs
app.get('/viewblogs',(req,res)=>{
    res.render(__dirname+'/views/viewblogs/patientblog.ejs')
})

app.get('/addblogs',(req,res)=>{
    res.render(__dirname+'/views/viewblogs/modify.ejs')
})

app.get('/login',(req,res)=>{
   
    res.render(__dirname+'/views/authentication/login.ejs')
    
})


app.get('/register',(req,res)=>{
    res.render(__dirname+'/views/authentication/register.ejs')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);   
  });
