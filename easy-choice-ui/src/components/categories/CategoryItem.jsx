import React from "react";
import classes from "./CategoryItem.module.css"
import { Link } from "react-router-dom";

const CategoryItem = (props) => {
    if ((props.category.id%5) != 0 ){
    return(   
    <Link to={`/category/${props.category.slug}`} style={{ textDecoration: 'none'}}>
        <div className={classes.category_item}>
            <div className={classes.category_img}>
                <img src={props.category.image_link} className={classes.cat_icon}/>
            </div>
            <div className={classes.category_title}><p>{props.category.title}</p></div>
        </div>
    </Link>

    )
    }else return(
        <Link to={`/category/${props.category.slug}`} style={{ textDecoration: 'none'}}>
            <div className={classes.category_item_5}>
            <div className={classes.category_img}>
                <img src={props.category.image_link} className={classes.cat_icon}/>
            </div>
            <div className={classes.category_title}><p>{props.category.title}</p></div>
            </div>
        </Link>
    )
}
export default CategoryItem;