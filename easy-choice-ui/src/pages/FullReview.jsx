import React from "react"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import classes from "../components/styles/FullReview.module.css"
import ReactPlayer from "react-player"


const FullReview = () =>{

    const review = {
        title:"Обзор ноутбука MacBook Air 13” на ARM-процессоре Apple M1",
        short_reviews_text:"Ноутбуки MacBook Air от Apple всегда славились своим высочайшим качеством, но грандиозные изменения здесь происходили редко. Однако всё изменилось с выходом процессора M1 от Apple. Таким образом, мощность нового ультрабука Apple MacBook Air M1 (2020) вышла на новый уровень.",
        reviews_main_photo_link:"https://i2.wp.com/itc.ua/wp-content/uploads/2021/01/dsc04027.jpg?fit=1920%2C1280&quality=100&strip=all&ssl=1",
        all_reviews_text:"jfsukgugdufkggsugdfuassssssssssssssssssssss sssssssssss ssssssssssssssssss sssssssssssssssssssssss ssssssssssssssss sssssssssssssss ssssssssssssssss ssssssssssssssssss ssssssssssssssss ssssssssssssss ssssssssssssssss ssssssssssss sssssssssssssssss sssssssssssssss ssssssssgdtgggg ggggggggggggggg ggggggggggggggggg ggggggggggggg ggggggggggggg gВ прошлом Mac Book Air наконец заменили неудачную клавиатуру «бабочку» с множеством проблем связанными со сломанными клавишами и попаданием пыли внутрь. Теперь в Air используются клавиатуры Magic Keyboard.",
        reviews_video_link:"https://www.youtube.com/watch?v=Fok17zwfXAY",
        reviews_photos:
                [
                    "https://i2.wp.com/itc.ua/wp-content/uploads/2021/01/dsc04027.jpg?fit=1920%2C1280&quality=100&strip=all&ssl=1",
                    "https://avatars.mds.yandex.net/get-mpic/4509881/img_id7593926477640870618.jpeg/orig",
                    "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-og-202011?wid=600&hei=315&fmt=jpeg&qlt=95&.v=1604278672000",
                    "https://i2.wp.com/itc.ua/wp-content/uploads/2021/01/dsc04027.jpg?fit=1920%2C1280&quality=100&strip=all&ssl=1",
                    "https://avatars.mds.yandex.net/get-mpic/4509881/img_id7593926477640870618.jpeg/orig",
                    "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-og-202011?wid=600&hei=315&fmt=jpeg&qlt=95&.v=1604278672000"
                ]

    }

    return(
        <div className={classes.FullReview}>
            <Header/>
            <div className={classes.full_content}>
                <h1 className={classes.reviews_title}>{review.title}</h1>
                <div className={classes.short_reviews_text}>{review.short_reviews_text}</div>
                <div className={classes.main_review_photo}><img src={review.reviews_main_photo_link}/></div>
                <div className={classes.big_review_text}>{review.all_reviews_text}</div>
                <div className={classes.reviews_video}><ReactPlayer url={review.reviews_video_link} controls="true"/></div>
                <div className={classes.reviews_photos}>{review.reviews_photos.map(link=>
                    <img src={link} className={classes.image_item}/>)}
                </div>
            </div>
            <Footer/>
        </div>)

}

export default FullReview;