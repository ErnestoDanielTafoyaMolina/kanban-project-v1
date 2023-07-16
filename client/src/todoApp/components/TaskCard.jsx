import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { useTasks } from '../../context/tasks';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export const TaskCard = ({ title, description, id }) => {
  const navigate = useNavigate();
  const { onDeleteTask } = useTasks();
  const onDelete = async () => {
    try {
      await onDeleteTask( id );
    } catch (error) {
      console.error(error);
    }
  }
  const onEdit = () => {
    navigate(`/task/${id}`)
  }
  return (
  <div className="bg-purple-900 p-4 rounded-lg shadow-md mb-4">
    <h3 className="text-lg font-bold mb-2 text-center">{title}</h3>
    <p className="mb-4">{description}</p>

    <div className="flex justify-between">

    <button 
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={ onEdit }
        >
        <AiFillEdit />
      </button>
      <button 
        className="bg-red-500 text-white px-4 py-2 rounded-md"
        onClick={ onDelete }
        >
        <AiFillDelete />
      </button>

    </div>
  </div>
  )
}
