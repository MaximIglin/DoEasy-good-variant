import React from "react";
import Footer from "../components/Footer/Footer";
import CategoryGrid from '../components/categories/CategoryGrid';
import Header from "../components/Header/Header";
import classes from "../components/styles/about.module.css"

const AboutPage = () => {

    return(
        <div>
            <Header/>
            <div className={classes.about}>
                <div className={classes.about_content}>
                    <div className={classes.about_text}>
                        <h3>О компании</h3>
                        <p className={classes.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nam architecto voluptatibus eaque, labore inventore corrupti, ipsum quas iure quia vel aspernatur ex magnam explicabo quisquam quidem blanditiis ab. Sed.</p>
                    </div>
                    <div className={classes.about_photos}>
                        <div className={classes.big_photo}><img src="https://www.ixbt.com/img/n1/news/2021/3/2/MacBook-Air-MacBook-Pro-i-Mac-mini-Noutbuki-6_large.jpg"className={classes.big_image}/></div>
                        <div className={classes.small_photos}>
                            <img src="https://damsovet.net/wp-content/uploads/2021/01/samsung-galaxy-s21-plus-11.jpg" alt="" className={classes.small_image}/>
                            <img src="https://habrastorage.org/getpro/habr/upload_files/683/998/a5c/683998a5ca39c60e55b34c740cc9d97b.jpeg" alt="" className={classes.small_image}/>
                        </div>
                    </div>
                </div>
            </div>
            <CategoryGrid/>
            <Footer/>
        </div>
    )
}

export default AboutPage;