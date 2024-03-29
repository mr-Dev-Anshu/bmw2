import React from "react";
import { HashLink } from "react-router-hash-link";
import task from "../../assets/task.png";

const TaskCard = (props) => {
  return (
    <div className="flex justify-between h-20 bg-slate-300 mx-4 rounded-xl px-10">
      <div className="flex justify-center items-center gap-4">
        <img className="h-16" src={task} alt="" />
        <p className="text-xl font-semibold">{props.task}</p>
      </div>
      <p className="flex items-center">{props.description}</p>
      <HashLink className="flex items-center">
        <p className="bg-blue-700 w-24 p-2 rounded-xl text-center text-white font-semibold">Start</p>
      </HashLink>
    </div>
  );
};

export default TaskCard;
