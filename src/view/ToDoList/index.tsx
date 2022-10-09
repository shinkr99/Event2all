import SideBar from "../../components/SideBar/SideBar";
import BreadCrumbs from "../../components/BreadCrumbs";
import TaskList from "../../components/ToDoList/TaskList";
import { TasksProvider } from "../../contexts/TasksContext";
import { NewTask } from "../../components/ToDoList/NewTask";

export default function ToDoList() {
  const breadCrumbsItem = [
    { name: "Home", link: "/" },
    { name: "Nome do Evento", link: "/evento" },
    { name: "Convidados", link: "/convidados" },
  ];

  return (
    <>
      <div className="h-100 d-flex">
        <SideBar />
        <div className="w-100 vh-100 ">
          <BreadCrumbs className="" items={breadCrumbsItem} />
          <div className="mt-4">
            <h2 className="d-flex align-items-center justify-content-center">
              Lista de Tarefas
            </h2>
            <TasksProvider>
              <NewTask />
              <TaskList />
            </TasksProvider>
          </div>
        </div>
      </div>
    </>
  );
}
