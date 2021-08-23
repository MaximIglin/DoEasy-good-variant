import React, { useState } from "react";
import classes from "./slider.module.css"
import SliderComponent from "../UI/Slider_UI/SliderCom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const Slider = () => {

    const [slider_data, setSlider] = useState([
        {id:1,
         link:"https://i1.wp.com/itc.ua/wp-content/uploads/2020/07/apple-macbook-air-2020-2-of-19.jpg?fit=770%2C513&quality=100&strip=all&ssl=1",
         text:"Сделать свой выбор правильно и легко!"
        },
        {id:2,
        link:"http://planet-design.com.ua/wp-content/uploads/2010/04/designer_desktop04.jpg",
        text:"Новости мира IT"
        },
        {id:3,
        link:"https://images.samsung.com/ru/smartphones/galaxy-s21/buy/s21_family_kv_mo_img_201221.jpg?imwidth=720",
        text:"Выгодные предложения!"
        },
        {id:4,
        link:"https://static.digital812.su/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/2/1211201903_robot-pylesos-xiaomi-mi-robot-vacuum-mopping-cleaner-styj02ym-belyj-white-4-640x640.png",
        text:"Выгодные предложения!"
        },
        {id:5,
        link:"https://htstatic.imgsmail.ru/pic_image/2a7ba01158f63840573d569c1846e5ca/840/560/1919594/",
        text:"Выгодные предложения!"
        },
        {id:6,
        link:"https://images.samsung.com/ru/smartphones/galaxy-s21/buy/s21_family_kv_mo_img_201221.jpg?imwidth=720",
        text:"Выгодные предложения!"
        }     
    ])
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
                </Carousel>
        </div>
    )
}
export default Slider;