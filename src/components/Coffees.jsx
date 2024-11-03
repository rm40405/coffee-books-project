import { NavLink } from "react-router-dom";


const Coffees = ({coffee}) => {
    const {name,image}=coffee || {};
    return (
     <NavLink >   <div className="card bg-base-100 w-72 shadow-xl">
     <figure>
       <img
         src={image}
         alt="Shoes" />
     </figure>
     <div className="card-body">
       <h2 className="card-title">Shoes!</h2>
       <p>If a dog chews shoes whose shoes does he choose?</p>
       <div className="card-actions justify-end">
         <button className="btn btn-primary">Buy Now</button>
       </div>
     </div>
   </div></NavLink>
    );
};

export default Coffees;