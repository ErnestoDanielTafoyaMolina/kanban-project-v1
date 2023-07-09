import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

// eslint-disable-next-line react/prop-types
export const TaskCard = ({ title, description }) => {
  return (
    <div className="bg-purple-900 p-4 rounded-lg shadow-md mb-4">
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="mb-4">{description}</p>

    <div className="flex justify-between">

    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
        <AiFillEdit />
      </button>
      <button className="bg-red-500 text-white px-4 py-2 rounded-md">
        <AiFillDelete />
      </button>

    </div>
  </div>
  )
}
