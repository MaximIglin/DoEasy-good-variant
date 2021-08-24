import React from "react";
import classes from "./Row1Nav.module.css"
import { Link } from "react-router-dom";

const Row1Navigation = () => {
    return (
        <div className={classes.row_1_navigation}>
            <Link to="/" style={{ textDecoration: 'none', color: 'rgb(92, 92, 92)' }}><div className={classes.row_1_btn}>Главная</div></Link>
            <Link to="/about" style={{ textDecoration: 'none', color: 'rgb(92, 92, 92)' }}><div className={classes.row_1_btn}>О нас</div></Link>
            <Link to="/rewiews" style={{ textDecoration: 'none', color: 'rgb(92, 92, 92)' }}><div className={classes.row_1_btn}>Обзоры</div></Link>
            
        </div>
    )
}
export default Row1Navigation;

