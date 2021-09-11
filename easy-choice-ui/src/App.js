import React from 'react';
import MainPage from './pages/main.jsx';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import AboutPage from './pages/about.jsx';
import Rewiew from './pages/review.jsx';
import FullReview from './pages/FullReview.jsx';
import Login from './pages/users_system/Login.jsx';
import Signup from './pages/users_system/Registration.jsx';
import CategoryDetail from './pages/category_detail.jsx';
import ProductDetail from './pages/productdetail.jsx';
import UserPage from './pages/users_system/user_page.jsx';

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
      <Route exact path="/login">
          <Login/>
      </Route>
      <Route exact path="/register">
          <Signup/>
      </Route>

      <Route exact path="/category/:slug">
        <CategoryDetail/>
      </Route>

      <Route path="/product/:slug">
        <ProductDetail/>
      </Route>

      <Route exact path="/account">
        <UserPage/>
      </Route>

    </BrowserRouter>
    
  )
}
export default App;