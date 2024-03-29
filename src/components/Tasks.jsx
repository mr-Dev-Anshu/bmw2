import React from "react";
import MenuBar from "./common/MenuBar";
import TaskCard from "./fragments/TaskCard";

const Tasks = () => {
  return (
    <div className=" relative w-full h-[100vh] bg-white mb-48">
      <p className="px-6 py-6 text-3xl font-bold text-center ">Tasks</p>
      <MenuBar />
      <div className="flex flex-col gap-4">
        <TaskCard
          task="Complete V1 Invitation Task"
          description="Invite 5 friends to become VIP1 and get 100 Rupees Reward"
        />
        <TaskCard
          task="Complete V1 Invitation Task"
          description="Invite 10 friends to become VIP1 and get 500 Rupees Reward"
        />
        <TaskCard
          task="Complete V1 Invitation Task"
          description="Invite 50 friends to become VIP1 and get 1,000 Rupees Reward"
        />
        <TaskCard
          task="Complete V1 Invitation Task"
          description="Invite 100 friends to become VIP1 and get 5,000 Rupees Reward"
        />
        <TaskCard
          task="Complete V2 Invitation Task"
          description="Invite 5 friends to become VIP2 and get 3,000 Rupees Reward"
        />
        <TaskCard
          task="Complete V2 Invitation Task"
          description="Invite 10 friends to become VIP2 and get 7,000 Rupees Reward"
        />
        <TaskCard
          task="Complete V3 Invitation Task"
          description="Invite 5 friends to become VIP3 and get 10,000 Rupees Reward"
        />
        <TaskCard
          task="Complete V3 Invitation Task"
          description="Invite 10 friends to become VIP3 and get 20,000 Rupees Reward"
        />
      </div>
    </div>
  );
};

export default Tasks;
