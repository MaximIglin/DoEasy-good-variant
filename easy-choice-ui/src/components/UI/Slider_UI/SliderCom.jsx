import React from "react"
import classes from "./SliderComp.module.css"


const SliderComponent = (props) => {
    return (
        <div className={classes.slider_component} style={{backgroundImage:`url(${props.comp.slider_image_link})`,
                                                                            backgroundSize: 'cover', 
                                                                            backgroundPosition: 'center center',
                                                                            backgroundRepeat: 'no-repeat'}}>
            <div className={classes.slider_comp_text}>{props.comp.slider_comp_text}</div>
        </div>
    )
}

export default SliderComponent;