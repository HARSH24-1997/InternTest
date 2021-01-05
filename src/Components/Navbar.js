import React from 'react'
import { GoogleLogout } from 'react-google-login';
import { useHistory } from 'react-router-dom';

const clientId = '325732398866-tarf1c62mcoe9kmbhpahu4c39aaato1l.apps.googleusercontent.com';


function Navbar() {
  let history = useHistory();
  var data = JSON.parse(localStorage.getItem("myData"));

  var logoutN = () => {
    localStorage.clear();
    history.push("/")
  }

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
      <div className="container">
        <div className="navbar-brand">
          <div className="row">
            <div className="px-2 py-0"><img src={`${data.imageUrl}`} height="25vh" width="25vw" /></div>
            <b>{data.name}</b>
          </div>
        </div>
        <ul className="navbar-nav ml-auto">
          <div className="btn-group">
            <button className="btn btn-primary dropdown-toggle" data-toggle="dropdown"> Profile & Logout </button>
            <div className="dropdown-menu"> <div className="dropdown-item">Profile</div>
              <div className="dropdown-divider"></div>
              <div className="dropdown-item"><GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={logoutN}
              ></GoogleLogout></div>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
