import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path"
import userProfilerouter from "./routes/userProfile.route.js";
import userRouter from "./routes/authRoutes.js";


const app = express();
const PORT = process.env.PORT ||3000;

const _dirname = path.resolve()
const corsOptions = {
  origin : "https://snack-steer.onrender.com/",
  credentials : true
}
app.use(cors(corsOptions));
app.use(express.json());
app.use("/userProfile", userProfilerouter);
app.use('/auth', userRouter);

app.use(express.static(path.join(_dirname, "/Frontend/SnackSteer/dist")))
app.get("*", (req,res)=>{
  res.sendFile(path.resolve(_dirname,"Frontend","SnackSteer","dist","index.html"))
})

app.listen(PORT, async () => {
  try {
    await mongoose.connect("mongodb+srv://ddhruv8824:BrSnEqkjXY5IGgUA@cluster0.n4jf8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log(`Server is running at port ${PORT}`);
  } catch (error){
    console.error(error,"Error Connectin to MongoDB");
  }
});
