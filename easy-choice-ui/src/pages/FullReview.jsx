import React, { useEffect, useState } from "react"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import classes from "../components/styles/FullReview.module.css"
import ReactPlayer from "react-player"
import axios from "axios"
import { useParams } from "react-router"

const FullReview = () =>{

    const review_id = useParams().id
    console.log(review_id)
    const [review, setReview] = useState("")
    const [isReviewLoad, setIsReviewLoad] = useState(false)
    
    async function fetchReviewDetail(){
        setIsReviewLoad(true)
        const response = await axios(`http://localhost:8000/api/reviews/${review_id}`)
        setReview(response.data)
        setIsReviewLoad(false)
    }

    useEffect( ()=>{
        fetchReviewDetail()
    }, [])

    return(
        <div className={classes.FullReview}>
            <Header/>
            {isReviewLoad
            ? <h1></h1> 
            :
            <div className={classes.full_content}>
                <h1 className={classes.reviews_title}>{review.title}</h1>
                <div className={classes.short_reviews_text}>{review.review_short_text}</div>
                <div className={classes.main_review_photo}><img src={review.review_preview_link}/></div>
                <div className={classes.big_review_text}>{review.review_all_text}</div>
                <div className={classes.reviews_video}><ReactPlayer url={review.reviews_video_link} controls="true"/></div>
                {review.reviews_photos
                ?<div className={classes.reviews_photos}>{review.reviews_photos.images.map(link=>
                    <img src={link} className={classes.image_item}/>)}
                </div>
                :<div></div>
                }
            </div>
            }           
            <Footer/>
        </div>)

}

export default FullReview;