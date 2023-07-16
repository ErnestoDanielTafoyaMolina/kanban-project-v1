import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login,Register } from "../auth/pages";
import { AddTask, Home, Profile, Tasks } from "../todoApp/pages";
import { PrivateRoutes } from "./PrivateRoutes";

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>

            <Route path="/*" element={ <Home /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/register" element={ <Register /> } />

            <Route element={ <PrivateRoutes /> }>
              <Route path="/tasks" element={ <Tasks /> } />
              <Route path="/add-task" element={ <AddTask /> } />
              <Route path="/task/:id" element={ <AddTask /> } />
              <Route path="/profile" element={ <Profile /> } />
            </Route>

        </Routes>
    
    </BrowserRouter>
  )
}
