
import { useEffect } from "react";
import { useTasks } from "../../context/tasks";
import { TaskCard } from "../components/TaskCard";

export const Tasks = () => {
  const { onGetTasks, tasks } = useTasks();
  useEffect(() => {
  onGetTasks();
  }, [])
  return (
    
    <>
    {tasks ? (
    <div className="flex justify-center mt-2">
      {/* to do */}
          <div className="flex flex-col mx-4 p-2 rounded-md">
            <h2 className="text-lg font-bold mb-2 text-center">To do</h2>
            {tasks.map(task =>(
              <TaskCard key={ task.idTask } id={ task.idTask } title={ task.taskName } description={ task.taskDescription } />
            ) )}
          </div>
        {/* doing */}

          <div className="flex flex-col mx-4 p-2 rounded-md">
            <h2 className="text-lg font-bold mb-2 text-center">Doing</h2>
          </div>
          {/* done */}
          <div className="flex flex-col mx-4 p-2 rounded-md">
            <h2 className="text-lg font-bold mb-2 text-center">Done</h2>

          </div>
      </div>
      ):(
        <div className="card bg-red-800 mx-10 my-10 text-center"> No hay tareas aqui </div>
      )}
    </>
  );
}
