import axios from "axios";
import React from "react"
import { useState, useEffect } from "react/cjs/react.development";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import classes from "./user_page.module.css"

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
            : <div className={classes.account}>
                    <div className={classes.account_content}>
                        <div className={classes.accaunt_title}>
                            <div className={classes.accaunt_avatar}>
                                <img src="http://pm1.narvii.com/6526/85c4320891c9f6162769969d9c770b3feeb7246d_00.jpg" alt="" />
                            </div>
                        </div>
                            <div className={classes.accaunt_name}>{user.first_name} {user.last_name} </div>
                            <div className={classes.accaunt_info}>

                            <div  className={classes.info_component}>
                                <div className={classes.key}>Никнейм</div> 
                                <div className={classes.value_and_btn}>
                                    <div>{user.username}</div>
                                    <div className={classes.btn}><img src="https://image.flaticon.com/icons/png/512/565/565722.png" alt="" /></div>
                                </div>
                                
                            </div>

                            <div className={classes.info_component}>
                                <div className={classes.key}>Номер</div>
                                <div className={classes.value_and_btn}>
                                        <div>8-800-535-35-35</div>
                                        <div className={classes.btn}><img src="https://image.flaticon.com/icons/png/512/565/565722.png" alt="" /></div>
                                </div>
                            </div>

                            <div className={classes.info_component}>
                                <div className={classes.key}>Email</div>
                                <div className={classes.value_and_btn}>
                                    <div>{user.email}</div>
                                    <div className={classes.btn}><img src="https://image.flaticon.com/icons/png/512/565/565722.png" alt="" /></div>
                                </div>
                            </div>

                            <div className={classes.info_component}>
                                <div className={classes.key}>Дата рождения</div>
                                <div className={classes.value_and_btn}>
                                        <div>{user.birh_date}</div>
                                        <div className={classes.btn}><img src="https://image.flaticon.com/icons/png/512/565/565722.png" alt="" /></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            
            }           
            <Footer/>
        </div>
    )
}

export default UserPage;