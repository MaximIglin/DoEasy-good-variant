import React from "react";
import classes from "../styles/header_st.module.css"
import Row1Navigation from "../UI/header_UI/Row1Nav"
import Row2Navigation from "../UI/header_UI/Row2Nav"
import Row2Icon  from "../UI/header_UI/Row2Icon";
import { Link } from "react-router-dom";



const Header = () => {
    return(
        <div className={classes.header}>
            <div className={classes.header_row_1}>
                <div className={classes.row_1_content}>
                    <div className={classes.header_city}>Москва</div>
                    <Row1Navigation/>
                    <div className={classes.row_1_info}>iglin1488@gmail.com</div>
                </div>
            </div>
            <div className={classes.header_row_2}>
                <div className={classes.row_2_content}>
                    <Row2Navigation/>
                    <div className={classes.logo}><Link to="/" style={{ textDecoration: 'none', color: 'rgb(92, 92, 92)' }}>DoEasyChoice</Link></div>
                    <Row2Icon/>
                </div>
            </div>
        </div>
    )
}
export default Header;