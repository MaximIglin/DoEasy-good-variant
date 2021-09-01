import React from "react";
import classes from "../components/styles/category_detail.module.css"
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProductItem from "../components/product_item_comp/productItem";
import BrandsSlider from "../components/Brands_slider/brandsSlider";

const CategoryDetail = () => {

    const products = [
        {
            "id": 1,
            "name": "iphone-12",
            "slug": "iphone12",
            "image_link": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1604021663000",
            "description": "Хороший телефон",
            "price": "70000.00",
            "stock": 20,
            "available": true,
            "created": "2021-08-31",
            "category": 1
        },
        {
            "id": 3,
            "name": "Samsung galaxy s10e",
            "slug": "samsungs10e",
            "image_link": "https://static.beeline.ru/shop/media/goods/334x434/48a4ec15-5d6d-4c4a-8f94-22cf2c0417bf.png",
            "description": "Заебись телефон",
            "price": "49990.00",
            "stock": 1,
            "available": true,
            "created": "2021-08-31",
            "category": 1
        },
        {
            "id": 4,
            "name": "Samsung galaxy s10e",
            "slug": "samsungs10e",
            "image_link": "https://static.beeline.ru/shop/media/goods/334x434/48a4ec15-5d6d-4c4a-8f94-22cf2c0417bf.png",
            "description": "Заебись телефон",
            "price": "49990.00",
            "stock": 1,
            "available": true,
            "created": "2021-08-31",
            "category": 1
        },
        {
            "id": 5,
            "name": "Samsung galaxy s10e",
            "slug": "samsungs10e",
            "image_link": "https://static.beeline.ru/shop/media/goods/334x434/48a4ec15-5d6d-4c4a-8f94-22cf2c0417bf.png",
            "description": "Заебись телефон",
            "price": "49990.00",
            "stock": 1,
            "available": true,
            "created": "2021-08-31",
            "category": 1
        },
        {
            "id": 6,
            "name": "Samsung galaxy s10e",
            "slug": "samsungs10e",
            "image_link": "https://static.beeline.ru/shop/media/goods/334x434/48a4ec15-5d6d-4c4a-8f94-22cf2c0417bf.png",
            "description": "Заебись телефон",
            "price": "49990.00",
            "stock": 1,
            "available": true,
            "created": "2021-08-31",
            "category": 1
        },
        {
            "id": 7,
            "name": "Samsung galaxy s10e",
            "slug": "samsungs10e",
            "image_link": "https://static.beeline.ru/shop/media/goods/334x434/48a4ec15-5d6d-4c4a-8f94-22cf2c0417bf.png",
            "description": "Заебись телефон",
            "price": "49990.00",
            "stock": 1,
            "available": true,
            "created": "2021-08-31",
            "category": 1
        },
        {
            "id": 8,
            "name": "Samsung galaxy s10e",
            "slug": "samsungs10e",
            "image_link": "https://static.beeline.ru/shop/media/goods/334x434/48a4ec15-5d6d-4c4a-8f94-22cf2c0417bf.png",
            "description": "Заебись телефон",
            "price": "49990.00",
            "stock": 1,
            "available": true,
            "created": "2021-08-31",
            "category": 1
        }
    ]

    return(
        <div>
            <Header/>
            <div className={classes.category_detail}>
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
            <Footer/>
        </div>
    )
}

export default CategoryDetail;