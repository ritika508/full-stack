import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './src/utlis/dbConnect.js';
import dns from "dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);
dns.setDefaultResultOrder("ipv4first");

dotenv.config();



const app = express();
const PORT = process.env.PORT || 3000;



app.use(cors())




app.use(express.json());
app.use(express.urlencoded({ extended: true }));









app.get("/", (req, res) => {
    res.send("API is running...")
});

  

connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((error) => {
    console.error(`Error connecting to the database: ${error.message}`);
    process.exit(1);
});