import {useDispatch, useSelector} from "react-redux";
import React, {useState} from 'react';
import Register from "./Register";
import {sendRegisterThunk} from "../../bll/reducers/registerReducer";
import {AppStateType} from "../../bll/store";
import {isErrorAC} from "../../bll/reducers/registerReducer";
import {getCookie} from "../../bll/setToken";

const RegisterContainer: React.FC = () =>{

    const dispatch = useDispatch();
    const [email, setMail] = useState('');
    const [password, setPassword] = useState('');
    const state = useSelector((store: AppStateType) => store.register);
    const resetError = () => {
        dispatch(isErrorAC(false))
    };

    const signIn =  () => {
        dispatch(sendRegisterThunk(email, password))
    };
    const token = getCookie('token');

    return (
        <Register signIn={signIn}
               setMail={setMail}
               setPassword={setPassword}
               state={state}
               resetError={resetError}
               token={token}
        />
    )
};

export default RegisterContainer;