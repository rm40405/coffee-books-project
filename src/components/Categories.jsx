/* eslint-disable react/prop-types */


import { NavLink } from "react-router-dom";


const Categories = ({categories}) => {

    console.log(categories);


    return (
        <div role="tablist" className="tabs tabs-lifted">
            {
                categories.map((category, index) => (
                    <NavLink key={index}
                    role='tab'
                    className={({isActive})=>`tab bg-yellow-600  ${isActive?' tab-active':''}`}
                    to={`/category/${category.category}`}
                    
                    >{category.category}</NavLink>
                ))
            }
        
       
      </div>
    );
};

export default Categories;