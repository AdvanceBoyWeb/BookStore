import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();
app.use(cors({
  origin:"https://book-store-6q7j.vercel.app",
  credentials: true
}));
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to mongoDB
mongoose.connect(URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
})
.then(() => {
    console.log("Connected to mongoDB");
})
.catch((error) => {
    console.error("MongoDB connection error:", error);
});


app.get("/", (req, res) => {
    res.send("Bookstore backend is running!");
});

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

if (!process.env.VERCEL) {
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
}

export default app;
