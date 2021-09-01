import React from "react";
import classes from "./brandsSlider.module.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const BrandsSlider = () => {
    return (
        <div className={classes.courus}>
        <Carousel infiniteLoop={true}>
                <div className={classes.brands_slider}>
                    <div className={classes.brand_item} style={{backgroundImage:`url(https://www.ixbt.com/img/n1/news/2020/9/4/samsung-z-fold3_large.png)`,
                                                        backgroundSize: 'cover', 
                                                        backgroundPosition: 'center center',
                                                        backgroundRepeat: 'no-repeat'}}>
                                                        <h3>Samsung</h3>                        
                    </div>
                    <div className={classes.brand_item} style={{backgroundImage:`url(https://tehnoezh.ua/upload/medialibrary/5a5/5a5bcae573475a01f94c956f59720931.jpg)`,
                                                        backgroundSize: 'cover', 
                                                        backgroundPosition: 'center center',
                                                        backgroundRepeat: 'no-repeat'}}>
                                                        <h3>Apple</h3>                        
                    </div>
                    <div className={classes.brand_item} style={{backgroundImage:`url(https://tehnoezh.ua/upload/medialibrary/5a5/5a5bcae573475a01f94c956f59720931.jpg)`,
                                                        backgroundSize: 'cover', 
                                                        backgroundPosition: 'center center',
                                                        backgroundRepeat: 'no-repeat'}}>
                                                        <h3>Apple</h3>                        
                    </div>
                </div>
                <div className={classes.brands_slider}>
                    <div className={classes.brand_item} style={{backgroundImage:`url(https://www.ixbt.com/img/n1/news/2020/9/4/samsung-z-fold3_large.png)`,
                                                        backgroundSize: 'cover', 
                                                        backgroundPosition: 'center center',
                                                        backgroundRepeat: 'no-repeat'}}>
                                                        <h3>Samsung</h3>                        
                    </div>
                    <div className={classes.brand_item} style={{backgroundImage:`url(https://tehnoezh.ua/upload/medialibrary/5a5/5a5bcae573475a01f94c956f59720931.jpg)`,
                                                        backgroundSize: 'cover', 
                                                        backgroundPosition: 'center center',
                                                        backgroundRepeat: 'no-repeat'}}>
                                                        <h3>Apple</h3>                        
                    </div>
                    <div className={classes.brand_item} style={{backgroundImage:`url(https://tehnoezh.ua/upload/medialibrary/5a5/5a5bcae573475a01f94c956f59720931.jpg)`,
                                                        backgroundSize: 'cover', 
                                                        backgroundPosition: 'center center',
                                                        backgroundRepeat: 'no-repeat'}}>
                                                        <h3>Apple</h3>                        
                    </div>
                </div>
        </Carousel>
        </div>
            
    )
}

export default BrandsSlider;