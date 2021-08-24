import React from "react";
import classes from "../components/styles/review.module.css"
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ReviewComp from "../components/review_component/ReviewComponent";


const Rewiew = () => {

    return(
        <div>
            <Header/>
                <div className={classes.container}>
                <h1 className={classes.OBZORI}>Обзоры</h1>
                <div className={classes.review_content}>
                <div className={classes.big_review_container} style={{backgroundImage:`url(https://3dnews.ru/assets/external/illustrations/2021/08/24/1047403/Xiaomi810298c.jpg)`,
                                                        backgroundSize: 'cover', 
                                                        backgroundPosition: 'center center',
                                                        backgroundRepeat: 'no-repeat'}}>
                        <div className={classes.review_info}>
                            <h3 className={classes.big_review_title}>КСИАОМИ БОЛЬШЕ НЕ МИ</h3>
                            <div className={classes.short_big_review_text}>sometesometext somet extsometexts ometextsometex tsometextsometextso metextsometext xtsometexts ometext</div>
                            <div className={classes.big_review_date}>02.06.0222</div>
                        </div>

                        </div>                        
                        <ReviewComp/>
                        <ReviewComp/>
                        <ReviewComp/>
                        <ReviewComp/>
                        <ReviewComp/>
                        <ReviewComp/>
                        <ReviewComp/>

                    </div>
                </div>
            <Footer/>
        </div>
    )
}

export default Rewiew;