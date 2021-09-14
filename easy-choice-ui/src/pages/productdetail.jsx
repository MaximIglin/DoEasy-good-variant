import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import classes from "../components/styles/productdetail.module.css"
import axios from "axios";
import { useParams, Link } from "react-router-dom";



const ProductDetail = () => {
    const [product, setProduct] = useState("")
    const [isLoad, setLoad] = useState(false)
    const slug = useParams().slug
    async function FetchProduct(){
        const category_slug = slug.split("_")[0]
        const product_slug = slug.split("_")[1]
        setLoad(true)
        const response = await axios(`http://localhost:8000/api/productdetail/?category_slug=${category_slug}&product_slug=${product_slug}`)
        setProduct(response.data)
        setLoad(false)
    }

    useEffect( () =>{
        FetchProduct()
    }, [])



    return(
        <div>
            <Header/>
            {isLoad
            ?<h1>Идёт загрузка</h1>

            :<div className={classes.product_content}>
                <pre>
                <div className={classes.path}>
                    <Link to={`/category/${product.category_slug}`} style={{ textDecoration: 'none'}}><div className={classes.link}>{product.category}/</div></Link>
                    <div> {product.name}</div>
                </div>
                </pre>
                <div className={classes.information_container}>
                    <img src={product.image_link} className={classes.main_image}/>
                    <div className={classes.data}>
                        <h1>{product.name}</h1>
                        <div className={classes.specifications}>
                            <p className={classes.spec_item}>Цвет:<span className={classes.spec_value}>{product.color}</span></p>
                            <p className={classes.spec_item}>Диагональ дисплея:<span>{product.display_diagnal}</span></p>
                            <p className={classes.spec_item}>Разршение экрана:<span>{product.screen_resolution}</span></p>
                            <p className={classes.spec_item}>Страна производитель:<span>{product.manufecture_country}</span></p>
                            <div className={classes.add_to_cart} >Добавить в корзину</div>    
                        </div>
                    </div>
                </div>
            </div>
            }   
            <Footer/>

        </div>
    )
}

export default ProductDetail;