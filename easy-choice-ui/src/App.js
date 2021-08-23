import React from 'react';
import './App.css';
import CategoryGrid from './components/categories/CategoryGrid';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';



const App = () => {
  
  return(
    <div className="App">
      <Header/>
      <Slider/>
      <CategoryGrid/>
    </div>
    
  )
}
export default App;