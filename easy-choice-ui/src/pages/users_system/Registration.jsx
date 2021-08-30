import React, { useState, useEffect } from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import classes from "./userspages.module.css";


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [birth_date, setBirh] = useState('');
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      window.location.replace('http://localhost:3000/');
    } else {
      setLoading(false);
    }
  }, []);

  const onSubmit = e => {
    e.preventDefault();

    const user = {
      email: email,
      password1: password1,
      password2: password2,
      first_name: first_name,
      last_name: last_name,
      birh_date: birth_date
    };

    fetch('http://127.0.0.1:8000/api/v1/users/auth/register/', {
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
          setPassword1('');
          setPassword2('');
          localStorage.clear();
          setErrors(true);
        }
      });
  };

  return (
    <div>
      <Header/>
      <div className={classes.userspage}>
      {loading === false && <h1 className={classes.title}>Регистрация</h1>}
      {errors === true && <h2 className={classes.error}>Проверьте введённые поля</h2>}
      <form onSubmit={onSubmit}>
        <input
          name='email'
          type='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className={classes.input}
          placeholder="Введите ваш e-mail"
        />{' '}
        <br />
        <input
          name='password1'
          type='password'
          value={password1}
          onChange={e => setPassword1(e.target.value)}
          required
          className={classes.input}
          placeholder="Введите пароль"
        />{' '}
        <br />
        <input
          name='password2'
          type='password'
          value={password2}
          onChange={e => setPassword2(e.target.value)}
          required
          className={classes.input}
          placeholder="Введите пароль повторно"
        />{' '}
        <br />
        <input
          name='first_name'
          type='text'
          value={first_name}
          onChange = {e => setFirstName(e.target.value)}
          required
          className = {classes.input}
          placeholder = "Введите ваше имя"
        />{' '}
        <br />
        <input type='submit' value='Зарегистрироваться' className={classes.submit} />
      </form>
      </div>
      <Footer/>
    </div>
  );
};

export default Signup;