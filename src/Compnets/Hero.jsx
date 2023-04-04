import React, { useEffect, useState } from "react";
import { addNewTask } from "../redux/action/";
import { useDispatch } from "react-redux";

const Hero = () => {
  const [text, setText] = useState();
  const dispatch = useDispatch();

  const onHandleClick = (e) => {
    dispatch(addNewTask(text));
    setText("");
    console.log("work it ");
  };

  const onInChange = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <div className="flex justify-center items-center mt-16">
        <h1 className="text-3xl font-pop font-semibold">Task List</h1>
      </div>
      <div className="flex justify-center mt-16">
        <div className="w-[50rem]">
          <form className="items-center justify-center sm:flex">
            <input
              type="text"
              placeholder="Add Your Task"
              onChange={onInChange}
              className="text-gray-500 w-full p-3 rounded-md border outline-none focus:border-indigo-600"
            />
            <button
              onClick={onHandleClick}
              className="px-3.5 py-3.5 text-indigo-600 duration-150 bg-indigo-50 rounded-lg hover:bg-indigo-100 active:bg-indigo-200 ml-[12px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Hero;
