import express from "express";
import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import apiRoutes from "./Routes/apiRoutes.js";

dotenv.config();
const DB=process.env.MONGO_URL;
mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    family:4
}).then(()=>{
    console.log("connected");
}).catch((err)=>console.log(`${err} Error connecting`));

const app=express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api',apiRoutes);

app.get("/",(req,res)=>{
    res.send("<h1>Welcome To DreamWed- Connect</h1>")
});

const PORT=process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Server running at ${PORT}`.bgCyan.white);
})