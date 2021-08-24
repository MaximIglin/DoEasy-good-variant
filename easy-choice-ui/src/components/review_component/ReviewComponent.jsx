import React from "react"
import classes from "./review_comp.module.css"


const ReviewComp = (props) => {
    return(
        <div className={classes.review_container} style={{backgroundImage:`url(${props.review.review_preview_link})`,
                                                        backgroundSize: 'cover', 
                                                        backgroundPosition: 'center center',
                                                        backgroundRepeat: 'no-repeat',}}>
        <div className={classes.review_info}>                                                    
            <h3 className={classes.title}>{props.review.title}</h3>
            <div className={classes.short_review_text}>{props.review.review_short_text}</div>
            <div className={classes.date}>дата</div>
        </div>    
        </div>
    )
}
export default ReviewComp;