/** @format */

import express from "express";
import UserProfileModel from "../module/userProfile.module.js"; // Corrected model name
const userProfilerouter = express.Router();

userProfilerouter.post("/add", async (req, res) => {
  try {
    const newUser = await UserProfileModel.create(req.body); // Use await and direct object instead of an array
    res.status(201).send({ message: "User created", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send({ message: "Internal server error" });
  }
});

userProfilerouter.get("/", async (req, res) => {
  try {
    const data = await UserProfileModel.find(); // Await the result
    res.status(200).send(data);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send({ message: "Internal server error" });
  }
});

export default userProfilerouter;
