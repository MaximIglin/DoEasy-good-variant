import React from "react";
import classes from "./brandsSlider.module.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const BrandsSlider = () => {
    return (
        <div className={classes.courus}>
        <Carousel infiniteLoop={true} centerMode={true} centerSlidePercentage={90} showStatus={false} >
                <div className={classes.brands_slider}>
                    <div className={classes.brand_item} style={{backgroundImage:`url(https://www.ixbt.com/img/n1/news/2020/9/4/samsung-z-fold3_large.png)`,
                                                        backgroundSize: 'cover', 
                                                        backgroundPosition: 'center center',
                                                        backgroundRepeat: 'no-repeat'}}>
                                                        <h3 className={classes.brand_name}>Samsung</h3>                        
                    </div>
                    <div className={classes.brand_item} style={{backgroundImage:`url(https://tehnoezh.ua/upload/medialibrary/5a5/5a5bcae573475a01f94c956f59720931.jpg)`,
                                                        backgroundSize: 'cover', 
                                                        backgroundPosition: 'center center',
                                                        backgroundRepeat: 'no-repeat'}}>
                                                        <h3 className={classes.brand_name}>Apple</h3>                        
                    </div>
                    <div className={classes.brand_item} style={{backgroundImage:`url(https://www.ixbt.com/img/n1/news/2021/5/1/image_large_0_large_large_large.png)`,
                                                        backgroundSize: 'cover', 
                                                        backgroundPosition: 'center center',
                                                        backgroundRepeat: 'no-repeat'}}>
                                                        <h3 className={classes.brand_name}>Huawei</h3>                        
                    </div>
                </div>
                <div className={classes.brands_slider}>
                    <div className={classes.brand_item} style={{backgroundImage:`url(https://htstatic.imgsmail.ru/pic_image/e882e838b1a34704e04225501d271989/840/472/1682027/)`,
                                                        backgroundSize: 'cover', 
                                                        backgroundPosition: 'center center',
                                                        backgroundRepeat: 'no-repeat'}}>
                                                        <h3 className={classes.brand_name}>Mi</h3>                        
                    </div>
                    <div className={classes.brand_item} style={{backgroundImage:`url(https://tehnoezh.ua/upload/medialibrary/5a5/5a5bcae573475a01f94c956f59720931.jpg)`,
                                                        backgroundSize: 'cover', 
                                                        backgroundPosition: 'center center',
                                                        backgroundRepeat: 'no-repeat'}}>
                                                        <h3 className={classes.brand_name}>Apple</h3>                        
                    </div>
                    <div className={classes.brand_item} style={{backgroundImage:`url(https://tehnoezh.ua/upload/medialibrary/5a5/5a5bcae573475a01f94c956f59720931.jpg)`,
                                                        backgroundSize: 'cover', 
                                                        backgroundPosition: 'center center',
                                                        backgroundRepeat: 'no-repeat'}}>
                                                        <h3 className={classes.brand_name}>Apple</h3>                        
                    </div>
                </div>
        </Carousel>
        </div>
            
    )
}

export default BrandsSlider;