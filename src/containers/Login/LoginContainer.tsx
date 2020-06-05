import {useDispatch, useSelector} from "react-redux";
import React, {useState} from 'react';
import Login from "./Login";
import {isErrorAC, signInThunk} from "../../bll/reducers/loginReducer";
import {AppStateType} from "../../bll/store";
import {getCookie} from "../../bll/setToken";

const LoginContainer: React.FC = () => {
    const dispatch = useDispatch();
    const [email, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const state = useSelector((store: AppStateType) => store.login);

    const signIn = () => {
        dispatch(signInThunk(email, password, rememberMe))
    };
    const resetError = () => {
        dispatch(isErrorAC(false))
    };

    const token = getCookie('token');

    return (
        <Login signIn={signIn}
               resetError={resetError}
               setMail={setMail}
               setPassword={setPassword}
               setRememberMe={setRememberMe}
               state={state}
               token={token}
        />
    )
};

export default LoginContainer;