import styles from "./Tasks.module.css";
import Footer from "../Footer/Footer";
import logoTache from "./icons8-liste-de-tâches-64.png";

const Tasks = ({ list, deleteTask, modifyTask, changeCheck }) => {
  const trueList = list.filter((task) => task.check === true);
  const truenumber = trueList.length;
  const falsenumber = list.length - truenumber;
  return (
    <div className="p-3 m-3 w-3/5 border-2 bg-[#1a1b1f] border-stone-700 shadow-md shadow-blue-600 rounded-2xl flex flex-col gap-2">
      <div className="flex gap-2 justify-center items-center">
        <img src={logoTache} className="size-12" alt="logo du site" />

        <h1 className="font-extrabold text-3xl text-center text-white">
          Mes taches
        </h1>
      </div>
      <div>
        {list.length !== 0 ? (
          <h3 className="text-center ">
            Il vous reste{" "}
            <span className="text-amber-500 font-black p-1">{falsenumber}</span>{" "}
            tache{falsenumber > 1 ? "s" : ""} a accomplire
          </h3>
        ) : (
          <div className="text-md m-3 text-center ">
            Vous n'avez pas de taches aujoud'hui
          </div>
        )}
      </div>
      <div className="flex flex-col gap-6">
        {list.map((task) => (
          <div
            key={task.id}
            className={
              task.check ? styles.containChecker : styles.containDefault
            }
          >
            <div className="flex gap-4">
              <div className="size-[1cm] text-center p-1.5 font-black rounded-full bg-gray-700 text-white">
                {task.check ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 text-green-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  task.number
                )}
              </div>
              <div className="text-2xl text-white">{task.check}</div>
              <div className="" onClick={() => changeCheck(task.id)}>
                <span className={styles.text}> {task.text}</span>
              </div>
            </div>
            <div className="flex gap-2 text-sm ">
              <button
                className={`${styles.bouton} ${styles.deleteBouton}`}
                onClick={() => deleteTask(task.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button
                className={`${styles.bouton} ${styles.modifyBouton}`}
                onClick={() => modifyTask(task.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/*  */}
    </div>
  );
};

export default Tasks;
