import React from "react";
import classes from './review_comp.module.css'


const BigReviewComp = (props) =>{
    return(
        <div className={classes.big_review_container} style={{backgroundImage:`url(${props.big.review_preview_link})`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'}}>
            <div className={classes.review_info}>
                <h3 className={classes.big_review_title}>{props.big.title}</h3>
                <div className={classes.short_big_review_text}>{props.big.review_short_text}</div>
                <div className={classes.big_review_date}>02.06.0222</div>
            </div>

        </div> 

    )
}

export default BigReviewComp;