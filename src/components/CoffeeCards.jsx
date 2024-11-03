import { useLoaderData, useNavigate, useParams } from "react-router-dom";

import Coffees from "./Coffees";
import { useEffect, useState } from "react";


const CoffeeCards = () => {
    const navigate = useNavigate();
    const {category} = useParams();
    const data = useLoaderData();

    const [coffees,setCoffees] = useState([]);

    useEffect(() => {
        if(category){
            const filterCategory = [...data].filter(coffee => coffee.category===category);
        setCoffees(filterCategory);
        }
        else{
            setCoffees(data.slice(0, 6));
        }
    }, [category, data])


    console.log(category)
    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-6 gap-6">
           {
            coffees.map(coffee => <Coffees key={coffee.id} coffee={coffee}></Coffees>)
           }
           
        </div>
        <button className="btn btn-warning" onClick={() => navigate('/coffees')} >View All</button>
        </>
    );
};

export default CoffeeCards;