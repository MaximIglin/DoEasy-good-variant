import React, { useEffect, useState } from "react";
import classes from "./CategoryGrid.module.css"
import CategoryItem from "./CategoryItem";
import axios from "axios";


const CategoryGrid = () => {
    const [category, setCategory] = useState([])
    async function fetchCategory(){
        const response = await axios.get("http://localhost:8000/api/category/")
        setCategory(response.data)
    }

    useEffect( () => {
        fetchCategory()
    },[])

    return (
        <div className={classes.categories} id="category">
            <div className={classes.category_grid}>
                {category.map(category => 
                    <CategoryItem category={category} key={category.id}/>)}
            </div>

        </div>
    )
}
export default CategoryGrid;