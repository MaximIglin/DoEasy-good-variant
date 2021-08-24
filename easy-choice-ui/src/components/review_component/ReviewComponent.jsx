import React from "react"
import classes from "./review_comp.module.css"


const ReviewComp = (props) => {
    return(
        <div className={classes.review_container} style={{backgroundImage:`url(https://www.ixbt.com/img/x780/n1/news/2021/7/1/apple-iphone-kleuren_large_large.jpg)`,
                                                        backgroundSize: 'cover', 
                                                        backgroundPosition: 'center center',
                                                        backgroundRepeat: 'no-repeat',}}>
        <div className={classes.review_info}>                                                    
            <h3 className={classes.title}>Iphone13</h3>
            <div className={classes.short_review_text}>Как обычно...</div>
            <div className={classes.date}>дата</div>
        </div>    
        </div>
    )
}
export default ReviewComp;