import React from "react";
import classes from "./productItem.module.css"


const ProductItem = (props) => {
    return(
        <div className={classes.product_item}>
            <div className={classes.product_image}>
                <img src={props.product.image_link} alt={props.product.name} className={classes.image}/>
            </div>
            <div className={classes.product_name}>{props.product.name}</div>
                <div className={classes.product_price}>{props.product.price}-р</div>
                <div className={classes.add_to_cart}>Добавить в корзину</div>    
        </div>
    )
}

export default ProductItem;