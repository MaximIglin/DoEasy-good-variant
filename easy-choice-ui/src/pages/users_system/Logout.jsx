import React, { useState, useEffect, Fragment, cloneElement } from 'react';
import classes from "./userspages.module.css"

const Logout = ({active, setActive}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token') == null) {
      window.location.replace('http://localhost:3000/login');
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogout = e => {
    e.preventDefault();

    fetch('http://127.0.0.1:8000/api/v1/users/auth/logout/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        localStorage.clear();
        window.location.replace('http://localhost:3000/login');
      });
  };

  return (
    <div className={active ? classes.logout_active : classes.logout} onClick={()=> setActive(false)}>
      {loading === false && (
        <div className={classes.logout_content} onClick={el => el.stopPropagation()}>
          <Fragment>
            <h1>Вы уверенны, что хотите выйти?</h1>
            <input type='button' value='Выйти' onClick={handleLogout} className={classes.submit}/>
          </Fragment>
        </div>

      )}
    </div>
  );
};

export default Logout;