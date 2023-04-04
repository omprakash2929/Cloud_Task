import React, { useState } from "react";
import { deleteTask, updateTask, getAllTask } from "../redux/action/";
import { useDispatch } from "react-redux";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(task.data);
  const [del, setDel] = useState("");
  const onFormSubmit = (e) => {
    e.preventDefault();
    setEdit((prevState) => !prevState);
    dispatch(updateTask(task._id, text));
  };

  const taskDele = (del) => {
    dispatch(deleteTask(task._id));
    setDel((prevState) => !prevState);
  };
  return (
    <>
      <div className="flex w-[50rem] bg-white h-auto tracking-wide mb-2 border border-black-800 mx-1 rounded-lg relative">
        <div>
          <div className="small-banner w-1 h-8 bg-blue-600 absolute rounded-tl-md"></div>

          <p
            style={{ display: edit ? "none" : "" }}
            className="text-md font-regular p-6  text-gray-500"
          >
            {task.data}
          </p>
          <form
            onSubmit={onFormSubmit}
            style={{ display: edit ? "inline" : "none" }}
            action=""
          >
            <div className="flex items-center p-2 ">
              <input
                type="text"
                value={text}
                id="text"
                onChange={(e) => setText(e.target.value)}
                className="w-[48rem] p-3 ml-3 border-b-2 border-blue-600 text-gray-500 outline-none bg-transparent"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="flex items-center relative left-[15rem]  top-[-4rem] gap-2 gap-y-1 justify-center ml-[27rem]">
        <div>
          <button
            onClick={() => setEdit((prevState) => !prevState)}
            className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </button>
        </div>
        <div>
          <button onClick={taskDele}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-slate-500 hover:text-slate-700 hover:cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Task;
