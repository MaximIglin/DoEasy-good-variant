import React from "react";
import classes from "./Footer.module.css"


const Footer = () => {

    return(
        <div className={classes.footer}>
            <div className={classes.support}>
                <p className={classes.footer_text}>Техническая поддержка</p>

            </div>

        </div>
    )
}

export default Footer;