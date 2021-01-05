import React from 'react'
import {useHistory} from "react-router-dom";
import { GoogleLogin } from 'react-google-login'
const clientId = '325732398866-tarf1c62mcoe9kmbhpahu4c39aaato1l.apps.googleusercontent.com';

function Googlelogin() {
    let history = useHistory();
    const onSuccess = (res) => {
        console.log('Login Success: currentUser:', res.profileObj);
        localStorage.setItem('myData', JSON.stringify(res.profileObj));
        history.push("/Homepage")
    };

    const onFailure = (res) => {
        console.log('Login failed: res:', res);
        alert(
            `Failed to login.`
        );
    };

    return (
        <>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{ marginTop: '100px' }}
                isSignedIn={false}
            />
        </>
    )
}

export default Googlelogin
