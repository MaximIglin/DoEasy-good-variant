import React from "react";
import classes from "./Row1Nav.module.css"


const Row1Navigation = () => {
    return (
        <div className={classes.row_1_navigation}>
            <div className={classes.row_1_btn}>Главная</div>
            <div className={classes.row_1_btn}>О нас</div>
            <div className={classes.row_1_btn}>Обзоры</div>
        </div>
    )
}
export default Row1Navigation;