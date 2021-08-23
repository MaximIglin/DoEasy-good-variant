import React from 'react';
import classes from '../App.css';
import CategoryGrid from '../components/categories/CategoryGrid';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Slider from '../components/Slider/Slider';



const MainPage = () => {
  
  return(
    <div className={classes.App}>
      <Header/>
      <Slider/>
      <CategoryGrid/>
      <Footer/>
    </div>
    
  )
}
export default MainPage;