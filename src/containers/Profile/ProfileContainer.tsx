import {useDispatch, useSelector} from "react-redux";
import React, {useState} from 'react';
import Profile from "./Profile";
import {signInThunk} from "../../bll/reducers/loginReducer";
import {AppStateType} from "../../bll/store";

const ProfileContainer: React.FC = () => {

    const dispatch = useDispatch();

    const state = useSelector((store: AppStateType) => store.profile);


    return (
        <Profile /*signIn={signIn}
               setMail={setMail}
               setPassword={setPassword}
               setRememberMe={setRememberMe}*/
        />
    )
};

export default ProfileContainer;