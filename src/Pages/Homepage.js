import React from 'react'
import Footer from '../componets/Footer'
import MyProfile from '../componets/MyProfile'
import Navbar from '../componets/Navbar'

function Homepage(){
    return(
        <div>
            <Navbar/>
            <MyProfile/>
            <Footer/>
        </div>
    )
}

export default Homepage