import { AuthProvider } from "./context/auth"
import { TaskProvider } from "./context/tasks/TaskProvider"
import { AppRouter } from "./router/AppRouter"

function App() {

  return (
    <>
      <AuthProvider>
        <TaskProvider>
          <AppRouter />
        </TaskProvider>
      </AuthProvider>
    </>
  )
}

export default App
