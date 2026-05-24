import { useState } from "react";
import styles from "./Input.module.css";

const Input = ({ task, setTask, addTask }) => {
  return (
    <div className=" border-2  border-stone-700 shadow-purple-400 shadow-md  w-3/5   p-5 rounded-2xl gap-3">
      <form className="flex flex-col gap-3 ">
        <h2 className="text-left text-2xl font-bold">Ajouter une tache</h2>
        <div className=" flex justify-start gap-1">
          <input
            type="text"
            placeholder="Entrer votre tache"
            value={task}
            className="outline-none focus:shadow-purple-500 shadow-sm w-2/3 p-2 text-center text-thin text-stone-400 border-1 rounded-bl-[20px]   rounded-tl-[20px]  border-stone-600 "
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={addTask} className={styles.button}>
            Ajouter
          </button>
        </div>
      </form>
    </div>
  );
};

export default Input;
