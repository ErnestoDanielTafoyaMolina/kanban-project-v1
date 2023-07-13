import { AiOutlineLogout } from 'react-icons/ai';
import { IoMdAddCircle } from 'react-icons/io';
import { kanban } from '../../assets';
import { useAuth } from '../../context/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';


export const NavBar = () => {
    const navigate = useNavigate();
    const { signOut, user } = useAuth();
    
    const onAddTask = () => {
        navigate('/add-task')
    }
    console.log(user.userName)
  return (
        <nav className="bg-purple-900 py-4 px-6 flex justify-between items-center">
            <div className="flex items-center">
                <Link to='/tasks'><img src={ kanban } alt="Logo" className="h-8 w-8 mr-2" /></Link>
                <h1 className="text-white font-bold text-lg">Kanban</h1>
            </div>
            <div>
                { user ? (
                    <label className='text-white px-4 py-2 rounded-md mr-2 text-xl'>
                        { user.userName }
                    </label>
                ): (
                    <label className='text-white px-4 py-2 rounded-md mr-2 text-xl'>
                        userName
                    </label>
                ) }

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
