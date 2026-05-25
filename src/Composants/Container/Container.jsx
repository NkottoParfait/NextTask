import styles from "./Container.module.css";
import Header from "../Header/Header";
import Input from "../Input/Input";
import Tasks from "../Tasks/Tasks";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";

const Container = () => {
  const [task, setTask] = useState(""); //Declaration de la state pour gerer les taches
  const [list, setList] = useState([]); //Declaration de la state pour gerer la liste de toutes les taches

  // Efect qui recupere les donne du local storage et les place dans la List si ces donne existe
  useEffect(() => {
    const stockedTask = localStorage.getItem("taskList");
    if (stockedTask) {
      const save = setList(JSON.parse(stockedTask));
    }
  }, []);
  // fonction de sauvegarde de la liste de tache dans le local storage
  const saveInLocalStarage = (task) => {
    localStorage.setItem("taskList", JSON.stringify(task));
  };

  // Fonction pour ajouter une tache a la list
  const addTask = (e) => {
    e.preventDefault();
    if (task.trim()) {
      // verifie qu'il ya bien du text qui a ete entrer
      const newTask = {
        // creer l'objet newTask
        text: task,
        number: list.length ? list[list.length - 1].id + 1 : 1,
        id: list.length + 1,
        check: false,
      };
      setList([...list, newTask]); //Ajoute de objet grace a un spread operator\
      const newList = [...list, newTask];
      saveInLocalStarage(newList);
      setTask("");
    } else {
      alert(
        "Zonne vide , veuillez entrer une taches pour l'ajouter a votre liste",
      );
    }
  };
  // fonction pour chocher et decocher une tache
  const changeCheck = (id) => {
    const newlist = list.map((task) =>
      task.id === id ? { ...task, check: !task.check } : task,
    );
    setList(newlist);
    saveInLocalStarage(newlist);
  };

  // fonction pour supprimer un tache
  const deleteTask = (id) => {
    setList(list.filter((task) => task.id !== id));
    const newlist = list.filter((task) => task.id !== id);
    saveInLocalStarage(newlist);
  };
  // fonction pour modifier une tache
  const modifyTask = (id) => {
    const newTask = prompt("Entrer la nouvelle tache");
    if (newTask.trim()) {
      const newlist = list.map((task) =>
        task.id === id ? { ...task, text: newTask } : task,
      );
      setList(newlist);
      saveInLocalStarage(newlist);
    } else {
      alert("Enter du text");
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <Input task={task} setTask={setTask} addTask={addTask} />
      <Tasks
        list={list}
        deleteTask={deleteTask}
        modifyTask={modifyTask}
        changeCheck={changeCheck}
      />
      <Footer list={list} />
      <footer class="text-[#7a7a7a] italic font-thin text-sm mt-6">
        &copy; 2026 NextTask v.1.0 Parfait Nkotto Tous droits reserves
      </footer>
    </div>
  );
};

export default Container;
