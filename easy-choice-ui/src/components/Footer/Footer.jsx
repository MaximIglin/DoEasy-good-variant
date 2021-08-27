import React from "react";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";


const Footer = () => {

    return(
        <div className={classes.footer}>
            <div className={classes.support}>
                <p className={classes.footer_text}>Техническая поддержка</p>
        
            </div>

            <div className={classes.footer_logotype}><Link to="/" style= {{ textDecoration: 'none', color: 'rgb(92, 92, 92)'}}><h3>DoEasyChoice</h3></Link>
            </div>
            <div className={classes.footer_contacts}>
                <p>Контакты</p>
                <span>8-900-555-55-55</span>
            </div>

        </div>
    )
}

export default Footer;