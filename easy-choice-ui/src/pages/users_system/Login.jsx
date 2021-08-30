import React, { useState, useEffect } from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import classes from "./userspages.module.css";




const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState(false);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      if (localStorage.getItem('token') !== null) {
        window.location.replace('http://localhost:3000/index');
      } else {
        setLoading(false);
      }
    }, []);
  
    const onSubmit = e => {
      e.preventDefault();
  
      const user = {
        email: email,
        password: password
      };
  
      fetch('http://127.0.0.1:8000/api/v1/users/auth/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
        .then(res => res.json())
        .then(data => {
          if (data.key) {
            localStorage.clear();
            localStorage.setItem('token', data.key);
            window.location.replace('http://localhost:3000/');
          } else {
            setEmail('');
            setPassword('');
            localStorage.clear();
            setErrors(true);
          }
        });
    };
  
    return (
      <div>
        <Header/>
        <div className={classes.userspage}>
        {loading === false && <h1 className={classes.title}>Вход</h1>}
        {errors === true && <h2 className={classes.error}>Проверьте введённые поля</h2>}
        {loading === false && (
          <form onSubmit={onSubmit}>
            <input
              name='email'
              type='email'
              value={email}
              required
              onChange={e => setEmail(e.target.value)}
              className={classes.input}
              placeholder="E-mail"
            />{' '}
            <br />
            
            <input
              name='password'
              type='password'
              value={password}
              required
              onChange={e => setPassword(e.target.value)}
              className={classes.input}
              placeholder="Пароль"
            />{' '}
            <br />
            <input type='submit' value='Войти' className={classes.submit}/>
          </form>
          
        )}
        </div>
         <Footer/>
         
          
      </div>
     
    );
  };
  
  export default Login;