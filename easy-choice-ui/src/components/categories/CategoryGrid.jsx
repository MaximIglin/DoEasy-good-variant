import React, { useState } from "react";
import classes from "./CategoryGrid.module.css"
import CategoryItem from "./CategoryItem";

const CategoryGrid = () => {
    const [category, setCategory] = useState([
        {
            id:1,
            image_link:"https://image.flaticon.com/icons/png/512/2467/2467865.png",
            title:"Смартфоны"
        },
        {
            id:2,
            image_link:"https://image.flaticon.com/icons/png/512/65/65732.png",
            title:"Ноутбуки"
        },
        {
            id:3,
            image_link:"https://image.flaticon.com/icons/png/512/3566/3566255.png",
            title:"Наушники"
        },
        {
            id:4,
            image_link:"https://image.flaticon.com/icons/png/512/2972/2972473.png",
            title:"Wifi-роутеры"
        },
        {
            id:5,
            image_link:"https://image.flaticon.com/icons/png/512/3283/3283559.png",
            title:"Электросамокаты"
        },
        {
            id:6,
            image_link:"https://image.flaticon.com/icons/png/512/1104/1104590.png",
            title:"Бытовая техника"
        },
        {
            id:7,
            image_link:"https://image.flaticon.com/icons/png/512/644/644521.png",
            title:"Аксессуары"
        }, 
        {
            id:8,
            image_link:"https://image.flaticon.com/icons/png/512/3432/3432638.png",
            title:"Кабели"
        }, 
        {
            id:9,
            image_link:"https://image.flaticon.com/icons/png/512/2940/2940969.png",
            title:"Электро-инструмент"
        },
        {
            id:10,
            image_link:"https://image.flaticon.com/icons/png/512/2969/2969229.png",
            title:"Холодильники"
        },                        
    ])
    return (
        <div className={classes.categories}>
            <div className={classes.category_grid}>
                {category.map(category => 
                    <CategoryItem category={category} key={category.id}/>)}
            </div>

        </div>
    )
}
export default CategoryGrid;