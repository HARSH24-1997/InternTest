import React from 'react'
import Navbar from "../Components/Navbar";
import Order from "../Components/Order";


function Homepage() {

    return (
        <>
            <Navbar/>
            <div className="text-center mt-4">
                <h1>Your Orders</h1>
            </div>
            <div>
                <Order/>
            </div>
        </>

    )
}

export default Homepage
