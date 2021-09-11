import axios from "axios";
import React from "react"
import { useState, useEffect } from "react/cjs/react.development";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const UserPage = () => {

    const [user, setUser] = useState({})
    const [isLoaded, setisLoaded] = useState(false)

    async function fetchUser(){
        setisLoaded(true)
        const user_response = await axios.get('http://127.0.0.1:8000/api/v1/users/get_user/', {headers:{Authorization:localStorage.getItem('token')}})
        setUser(user_response.data.user)
        setisLoaded(false)
        
    
    }

    useEffect( () => {
        fetchUser()
    },[])
    


    return(
        <div>
            <Header/>
            {isLoaded
            ? <div>Идёт загрузка</div>
            : <div>{user.email}</div>
            }           
            <Footer/>
        </div>
    )
}

export default UserPage;