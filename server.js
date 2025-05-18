import express from 'express';
import bcrypt from 'bcrypt';
// import userRoutes from './routes/userRoutes.js';
// import mongodb from './config.js';
import dotenv  from 'dotenv';
dotenv.config();

// mongodb();
const PORT= process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.set("view engine", "ejs");

app.get('/:title', (req,res)=>{
    console.log("home page server");
    // res.send("test");
    const title = req.params.title || "home page"
    res.render("home", {title:title});
})

// app.use('/v1/api/', userRoutes);



app.listen(4000, (err)=>{
    if(err) console.log(err);
    console.log(`server running on http://localhost:4000`);
})
