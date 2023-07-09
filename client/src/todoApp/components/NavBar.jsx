import { AiOutlineLogout } from 'react-icons/ai';
import { IoMdAddCircle } from 'react-icons/io';
import { kanban } from '../../assets';
export const NavBar = () => {
  return (
        <nav className="bg-purple-900 py-4 px-6 flex justify-between items-center">
            <div className="flex items-center">
                <img src={ kanban } alt="Logo" className="h-8 w-8 mr-2" />
                <h1 className="text-white font-bold text-lg">Kanban</h1>
            </div>
            <div>
                <button className= "text-white px-4 py-2 rounded-md mr-2 text-xl">
                    <IoMdAddCircle />
                </button>
                <button className="text-white px-4 py-2 rounded-md text-xl">
                    <AiOutlineLogout />
                </button>
            </div>
        </nav>
  )
}
