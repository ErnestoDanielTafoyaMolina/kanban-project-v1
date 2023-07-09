import { TaskCard } from "../components";

export const Tasks = () => {

  return (
    // To do
    <div className="flex justify-center mt-2">
      <div className="flex flex-col mx-4 p-2 rounded-md">
        <h2 className="text-lg font-bold mb-2 text-center">To do</h2>
        <TaskCard 
          title="comprar queso"
          description="ir a la tienda a comprar queso"
        />
      </div>
    {/* doing */}
      <div className="flex flex-col mx-4 p-2 rounded-md">
        <h2 className="text-lg font-bold mb-2 text-center">Doing</h2>
        <TaskCard 
          title="comprar queso"
          description="ir a la tienda a comprar queso"
        />
      </div>
      {/* done */}
      <div className="flex flex-col mx-4 p-2 rounded-md">
        <h2 className="text-lg font-bold mb-2 text-center">Done</h2>
        <TaskCard 
          title="comprar queso"
          description="ir a la tienda a comprar queso"
        />
      </div>
    </div>
  );
}
