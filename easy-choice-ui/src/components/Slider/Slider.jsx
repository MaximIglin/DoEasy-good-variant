import React, { useEffect, useState } from "react";
import classes from "./slider.module.css"
import SliderComponent from "../UI/Slider_UI/SliderCom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import axios from "axios";


const Slider = () => {

    const [slider_data, setSlider] = useState([])
    async function fetchSliderData(){
        const response = await axios.get("http://localhost:8000/api/slidercomponent/")
        setSlider(response.data)
    }

    useEffect( () => {
        fetchSliderData()
    },[])

    return(
        <div className={classes.slider}>
                <Carousel infiniteLoop={true}>
                    <div className={classes.slider_content}>
                        {slider_data.slice(0,3).map(comp =>
                        <SliderComponent comp={comp} key={comp.id}/>)}
                    </div>
                    <div className={classes.slider_content}>
                            {slider_data.slice(3,6).map(comp =>
                            <SliderComponent comp={comp} key={comp.id}/>)}
                    </div>
                    <div className={classes.slider_content}>
                            {slider_data.slice(6).map(comp =>
                            <SliderComponent comp={comp} key={comp.id}/>)}
                    </div>
                </Carousel>
        </div>
    )
}
export default Slider;