import React, { useState } from "react";
import classes from "./Row2Icon.module.css";

const Row2Icon = () => {
    const [icon_links, setIcon] = useState([
        {
            id:1,
            icon_link:"https://image.flaticon.com/icons/png/512/833/833314.png"
        },
        {
            id:2,
            icon_link:"https://image.flaticon.com/icons/png/512/1077/1077035.png"
        },
        {
            id:3,
            icon_link:"https://image.flaticon.com/icons/png/512/848/848043.png"
        },
        {
            id:4,
            icon_link:"https://image.flaticon.com/icons/png/512/1828/1828395.png"
        }
    ])
    return(
        <div className={classes.icons}>
            {icon_links.map(icon =>
                <div className={classes.row_2_icon} key={icon.id}><img src={icon.icon_link} className={classes.icon_image} /></div>)}
            
            
        </div>
    )
}
export default Row2Icon;