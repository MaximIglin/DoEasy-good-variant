import React from "react";
import classes from "./productItem.module.css"
import { Link } from "react-router-dom";



const ProductItem = (props) => {





    return(
        <Link to={`/product/${props.product.category_slug}_${props.product.slug}`} style={{ textDecoration: 'none', color:"black"}}>
            <div className={classes.product_item}>
                <div className={classes.product_image}>
                    <img src={props.product.image_link} alt={props.product.name} className={classes.image}/>
                </div>
                <div className={classes.product_name}>{props.product.name}</div>
                    <div className={classes.product_price}>{props.product.price}-р</div>
                    <div className={classes.add_to_cart}>Добавить в корзину</div>    
            </div>
        </Link>    
    )
}

export default ProductItem;