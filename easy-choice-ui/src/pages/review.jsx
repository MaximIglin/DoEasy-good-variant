import React, { useEffect, useState } from "react";
import classes from "../components/styles/review.module.css"
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ReviewComp from "../components/review_component/ReviewComponent";
import axios  from "axios";
import BigReviewComp from "../components/review_component/BigReviewCom";


const Rewiew = () => {

    
    const [review_data, setReview] = useState([])
    const [isReviewLoaded, setisReviewLoaded] = useState(false)
    async function fetchReviewData(){
        setisReviewLoaded(true)
        const response = await axios.get("http://localhost:8000/api/reviews/")
        setReview(response.data)
        setisReviewLoaded(false)
    }

    useEffect( () => {
        fetchReviewData()
    },[])
    
    return(
        <div>
            <Header/>
                <div className={classes.container}>
                <h1 className={classes.OBZORI}>Обзоры</h1>
                {isReviewLoaded
                ?<h1></h1>
                :<div className={classes.review_content}>
                            {review_data.slice(0,1).map(big=>
                                <BigReviewComp big={big} key={big.id} />)}
                           {review_data.slice(1).map(review =>
                            <ReviewComp review={review} key={review.id}/>)}
                    </div>
                    }
                </div>
                           
            <Footer/>
        </div>
    )
}

export default Rewiew;