import { AiOutlineLogout } from 'react-icons/ai';
import { IoMdAddCircle } from 'react-icons/io';
import { kanban } from '../../assets';
import { useAuth } from '../../context/auth/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';



export const NavBar = () => {
    const navigate = useNavigate();
    const { signOut, user } = useAuth();
    const onAddTask = () => {
        navigate('/add-task')
    }
  return (
        <nav className="bg-purple-900 py-4 px-6 flex justify-between items-center">
            <div className="flex items-center">
                <Link to='/tasks'><img src={ kanban } alt="Logo" className="h-8 w-8 mr-2" /></Link>
                <h1 className="text-white font-bold text-lg">Kanban</h1>
            </div>
            <div>
            <label className='text-white px-4 py-2 rounded-md mr-2 text-xl' title={`
            Nombre de usuario: ${user.userName} 
            Correo del usuario: ${user.userEmail}
            `}>
                        { user.userName }
            </label>

                <button className= "text-white px-4 py-2 rounded-md mr-2 text-xl"
                    onClick={ onAddTask }
                >
                    <IoMdAddCircle />
                </button>
                <button 
                    className="text-white px-4 py-2 rounded-md text-xl"
                    onClick={ signOut }
                    >
                    <AiOutlineLogout />
                </button>
            </div>
        </nav>
  )
}
