import axios from "./axios";

export const getTasksRequest = async () => await axios.get("/tasks");

export const getOneTaskRequest = async ( id ) => await axios.get(`/task/${ id }`);

export const createTaskRequest = async ( task ) => await axios.post("/task/add",task);

export const editTaskRequest = async ( id, task ) => axios.patch(`/task/edit/${ id }`,task);

export const deleteTaskRequest = async ( id ) => axios.delete(`/task/delete/${ id }`);

