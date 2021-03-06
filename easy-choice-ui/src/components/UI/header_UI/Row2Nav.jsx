import React from "react"
import classes from "./Row2Nav.module.css"


const Row2Navigation = () => {
    const catalog_class = classes.navbar_btn + ' ' + classes.catalog
    const brands_class = classes.navbar_btn + ' ' + classes.brands


    return(
        <div className={classes.row_2_navbar}>
            <a className={classes.do_choise} href="#category">СДЕЛАТЬ ВЫБОР</a>
            <div className={catalog_class}>КАТАЛОГ</div>
            <div className={brands_class}>БРЕНДЫ</div>
        </div>
    )
}
export default Row2Navigation;