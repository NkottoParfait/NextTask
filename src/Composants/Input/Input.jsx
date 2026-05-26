import { useState } from "react";
import styles from "./Input.module.css";

const Input = ({ task, setTask, addTask }) => {
  return (
    <div className=" border-2  border-stone-700 shadow-purple-400 shadow-md  w-3/5   p-5 rounded-2xl gap-3 max-sm:w-9/10 max-sm:p-1 max-sm:m-1 relative">
      <form className="flex flex-col gap-3  ">
        <h2 className="text-left text-2xl p-1 font-bold max-sm:text-sm">
          Ajouter une tache
        </h2>
        <div className=" flex justify-start gap-1">
          <input
            type="text"
            placeholder="Entrer votre tache"
            value={task}
            className="outline-none focus:shadow-purple-500 shadow-sm w-2/3 p-2 text-center text-thin text-stone-400 border-1 rounded-bl-[20px]   rounded-tl-[20px] max-sm:h-[1cm] border-stone-600 max-sm:text-sm"
            onChange={(e) => setTask(e.target.value)}
          />

          {/* .button {
  background-color: purple;
  color: white;
  font-weight: bolder;
  padding: 10px;
  border-radius: 0 20px 20px 0;
  animation: all 4000;
}
button:hover {
  transform: translateX(5px);
  background-color: white;
  color: purple;
  animation: all 4000;
} */}

          <button
            onClick={addTask}
            className=" bg-purple-700 font-bold p-2 rounded-r-[20px] max-sm:h-[1cm] max-sm:text-sm"
          >
            Ajouter
          </button>
        </div>
      </form>
    </div>
  );
};

export default Input;
