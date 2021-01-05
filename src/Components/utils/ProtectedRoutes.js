import React from 'react'
import {Redirect,Route} from 'react-router-dom';

function ProtectedRoutes({component:Component,...rest}) {
    var data = localStorage.getItem('myData');
    console.log(data,"fdfs")
    return (
        <Route
            {...rest}
            render = { () => localStorage.getItem("myData")===null ?(
                <Redirect to='/'/>
             ):(
                <Component/>
             )
        }
        />
    )
}

export default ProtectedRoutes
