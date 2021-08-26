import React from 'react';
import MainPage from './pages/main.jsx';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import AboutPage from './pages/about.jsx';
import Rewiew from './pages/review.jsx';
import FullReview from './pages/FullReview.jsx';


const App = () => {
  
  return(
    <BrowserRouter>
    
      <Route exact path="/">
          <MainPage/>
      </Route>
      <Route path="/about">
           <AboutPage/>
      </Route>
      <Route path="/rewiews">
           <Rewiew/>
      </Route>
      <Route path="/category_item">
      </Route>
      <Route path="/reviews/:id" >
            <FullReview/>
      </Route>
    </BrowserRouter>
    
  )
}
export default App;