import React, { useEffect, useState } from "react";
import classes from "../components/styles/category_detail.module.css"
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProductItem from "../components/product_item_comp/productItem";
import BrandsSlider from "../components/Brands_slider/brandsSlider";
import { useParams } from "react-router-dom";
import axios from "axios";

const CategoryDetail = () => {

    const slug = useParams().slug
    console.log(slug)
    const [products, setProducts] = useState([])
    const [isLoad, setIsLoad] = useState(false)
    
    async function FetchProductsByCategory(){
        setIsLoad(true)
        const response = await axios(`http://localhost:8000/api/categoryproducts/?slug=${slug}`)
        setProducts(response.data)
        setIsLoad(false)
    }

    useEffect( () =>{
        FetchProductsByCategory()
    }, [])

    return(
        <div>
            <Header/>
            {isLoad
            ? <h1>Идёт загрузка</h1>
            :<div className={classes.category_detail}>
                <div className={classes.category_content}>
                    <h1 className={classes.page_title}>Смартфоны</h1>
                    <div className={classes.main}>
                        <div className={classes.filter}></div>
                        <div className={classes.container}>
                            <BrandsSlider/>
                            <div className={classes.products_grid}>
                                {products.map(product => 
                                    <ProductItem product={product} key={product.id}/>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }
            <Footer/>
        </div>
    )
}

export default CategoryDetail;