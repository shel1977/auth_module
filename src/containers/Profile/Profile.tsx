import React from 'react';
import '../../App.css';
import Button from "../../components/Button/Button";
import {getCookie, setCookie} from "../../bll/setToken";
import {Redirect} from "react-router-dom";
import ProjLink from "../../components/NavLink/NavLink";

const Profile: React.FC = () => {
    const token = getCookie('token');
    const logOut = () => {
        setCookie('token', null, 0);
    };

    if (token === null) {
        return <Redirect to={'/login'} />
    }

    return (
        <div className="form">
            <h1>Profile</h1>
            <div>
                <span>You logged as: {token}</span>
            </div>
            <div>
                <Button name={'Log Out'} onClick={logOut} disabled={token === null}/>
            </div>
            <div>
                <ProjLink to={'/newpassword'} name={'change password'}/>
            </div>
        </div>
    );
}

export default Profile;