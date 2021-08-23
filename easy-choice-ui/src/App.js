import React from 'react';
import './App.css';
import CategoryGrid from './components/categories/CategoryGrid';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';



const App = () => {
  
  return(
    <div className="App">
      <Header/>
      <Slider/>
      <CategoryGrid/>
      <Footer/>
    </div>
    
  )
}
export default App;