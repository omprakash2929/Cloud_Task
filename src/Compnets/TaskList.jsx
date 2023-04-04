import React, { useEffect, useState } from "react";
import { getAllTask } from "../redux/action/";
import { useDispatch, useSelector } from "react-redux";
import Task from "./Task";

const TaskList = () => {
  const dispatch = useDispatch();
  const task = useSelector((state) => state.task);

  useEffect(() => {
    dispatch(getAllTask());
  }, []);

  return (
    <>
      <div className="flex justify-center flex-col items-center   mt-[3rem] ">
        {task.map((task) => (
          <Task key={task._id} task={task} />
        ))}
      </div>
    </>
  );
};

export default TaskList;
