import React from 'react'
import Login from "../Components/login";


function LoginPage() {
    return (
        <div className="container my-5" style={{height:"100%",width:"100%"}}>
        <div className="row my-auto" >
          <div className="mx-auto col-md-6 col-10 bg-white p-5 border shadow-lg">
            <h1 className="mb-4 text-center">Log in</h1>
            <Login/>
          </div>
        </div>
      </div>
    )
}

export default LoginPage
