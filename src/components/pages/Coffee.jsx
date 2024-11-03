import { useLoaderData } from "react-router-dom";
import Coffees from "../Coffees";


const Coffee = () => {
    const data = useLoaderData();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-6 gap-6">
           {
            data.map(coffee => <Coffees key={coffee.id} coffee={coffee}></Coffees>)
           }
           
        </div>
    );
};

export default Coffee;