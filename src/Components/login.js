import React,{useState,useRef} from 'react'
import Google from '../Components/Googlelogin';
import "./Index.css"

function login() {

    

    return (
        <form>
              <div className="form-group"> <input type="email" class="form-control" placeholder="Enter email" id="form9"/> </div>
              <div className="form-group mb-3"> <input type="password" class="form-control" placeholder="Password" id="form10"/> 
               </div> <button type="submit" class="btn btn-primary btn-block btn-sm">Login</button>
               <h2 className="my-4"><span>OR</span></h2>
               {/* <button type="submit" class="btn btn-primary btn-block btn-sm">Google</button> */}
               <center><Google/></center>
            </form>
    )
}

export default login
