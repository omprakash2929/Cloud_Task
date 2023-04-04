const express = require("express");
const Task = require("../models/Task");

const route = express.Router();

//! -------------- Add_New_Task---------------
route.post("/task", async (req, res) => {
  const newTask = await Task.create({
    data: req.body.data,
    createdAt: Date.now(),
  });

  const result = await newTask.save();
  console.log(result);
});

//! ---------------------- Get_Task------------------------
route.get("/task", async (req, res) => {
  const task = await Task.find({}).sort({ createdAt: -1 });
  res.send(task);
  console.log(task);
});

//!---------------------------- Delete_Task----------------
route.delete("/task/:id", async (req, res) => {
  const task_del = await Task.findByIdAndDelete(req.params.id);

  res.send(task_del);
});
//!------------------------------- Update_Task-----------------
route.put("/task/:id", async (req, res) => {
  await Task.findOneAndUpdate({ _id: req.params.id }, { data: req.body.data });

  const task = await Task.findById(req.params.id);
  res.send(task);
});
module.exports = route;
