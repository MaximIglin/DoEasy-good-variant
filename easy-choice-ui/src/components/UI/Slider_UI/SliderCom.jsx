import React from "react"
import classes from "./SliderComp.module.css"


const SliderComponent = (props) => {
    return (
        <div className={classes.slider_component} style={{backgroundImage:`url(${props.comp.link})`}}>
            <div className={classes.slider_comp_text}>{props.comp.text}</div>
        </div>
    )
}

export default SliderComponent;