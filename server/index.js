const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const connectDB = require("./config/DataBase");
const productRoutes = require("./routes/productRoutes");

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api/products", productRoutes);

connectDB();


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});