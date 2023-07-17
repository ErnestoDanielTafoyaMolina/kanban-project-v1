import { useContext, useState } from 'react'
import { TaskContext } from './TaskContext';
import { createTaskRequest, deleteTaskRequest, editTaskRequest, getOneTaskRequest, getTasksRequest } from '../../api';

export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) {
      throw new Error("useTask debe ser usado en su provider");
    }
    return context;
  };

// eslint-disable-next-line react/prop-types
export const TaskProvider = ({ children }) => {

    // eslint-disable-next-line no-unused-vars
    const [tasks, setTasks] = useState([]);

    const onGetTasks = async () => {
      try {
        const res = await getTasksRequest();
        setTasks( res.data );
      } catch (error) {
        console.error(error)
      }
    };
    const onCreateTask = async ( task ) => {
      try {
        const newTask = await createTaskRequest( task );
        setTasks( newTask.data );
        console.log(newTask);

      } catch (error) {
        console.error(error)
      }
    };
    const onDeleteTask = async ( id ) => {
      try {
        const res = await deleteTaskRequest( id );
        if(res.status===204)setTasks(tasks.filter(task=>task.idTask != id))
      } catch (error) {
        console.error(error)
      }
    };
    const onEditTask = async ( id, task ) => {
      try {
        const editedtask = await editTaskRequest( id, task );
        return editedtask;
      } catch (error) {
        console.error(error)
      }
    };
    const onGetOneTask = async ( id ) => {
      try {
        const res = await getOneTaskRequest( id );
        return res.data[0];
      } catch (error) {
        console.error(error);
      }
    }

  return (
    <TaskContext.Provider value={{
        tasks,
        useTasks,
        onCreateTask,
        onDeleteTask,
        onEditTask,
        onGetTasks,
        onGetOneTask
        
    }}>
        { children }
    </TaskContext.Provider>
  )
}
