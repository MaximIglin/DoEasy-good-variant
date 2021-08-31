import React, { useState, useEffect, Fragment } from "react";
import classes from "./Row2Icon.module.css";
import { Link } from 'react-router-dom';
import Logout from "../../../pages/users_system/Logout";



const Row2Icon = () => {
    const [icon, setIcon] = useState([
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
        },
        {
            id:5,
            icon_link:"https://image.flaticon.com/icons/png/512/1277/1277010.png"
        }
    ])

    const [isAuth,setIsAuth] = useState(false)
    const [modalActive, setModalActive] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
          setIsAuth(true);
        }
      }, []);


    return(
        <div className={classes.icons}>
            <div className={classes.row_2_icon}><img src={icon[0].icon_link} className={classes.icon_image} /></div>
            <div className={classes.row_2_icon}> <img src={icon[1].icon_link} className={classes.icon_image} /></div>
            {isAuth
                ? (<Fragment>
                    <div className={classes.row_2_icon}><Link to="/profile"><img src={icon[2].icon_link} className={classes.icon_image} /></Link></div>
                    <div className={classes.row_2_icon} onClick={ () => setModalActive(true)}><img src={icon[3].icon_link} className={classes.icon_image} /></div>
                    <Logout active={modalActive} setActive={setModalActive}/>
                </Fragment>
                )
                : (<Fragment>
                <div className={classes.row_2_icon}><Link to="/login"><img src={icon[3].icon_link} className={classes.icon_image}/></Link></div>
                <div className={classes.row_2_icon}><Link to="/register"><img src={icon[4].icon_link} className={classes.icon_image}/></Link></div>

                </Fragment>)
            }

        </div>
    )
}
export default Row2Icon;