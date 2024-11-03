import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Banner";

import Header from "../Header";
import Categories from "../Categories";


const Home = () => {

    const categories = useLoaderData()
    return (
        <div>
            {/* bannner section */}
            <Banner></Banner>
            {/* header */}
            <Header 
            title='Brower Coffee By Category'
            subtitle='Discover the best coffee in the world!'
            
            ></Header>
            {/* categories */}
           <Categories categories={categories}></Categories>
           {/* dynamic routes */}
           <Outlet></Outlet>

        </div>
    );
};

export default Home;