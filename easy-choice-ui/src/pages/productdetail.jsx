import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import classes from "../components/styles/productdetail.module.css"
import axios from "axios";
import { useParams } from "react-router-dom";



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
            :<div>{product.name}</div>
            }   
            <Footer/>

        </div>
    )
}

export default ProductDetail;