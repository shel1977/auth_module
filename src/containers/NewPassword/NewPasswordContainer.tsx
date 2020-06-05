import {useDispatch, useSelector} from "react-redux";
import React, {useState} from 'react';
import NewPassword from "./NewPassword";
import {isErrorAC, newPasswordThunk} from "../../bll/reducers/newPasswordReducer";
import {AppStateType} from "../../bll/store";
import {getCookie} from "../../bll/setToken";

const NewPasswordContainer: React.FC = () => {
    const dispatch = useDispatch();
    const [password, setPassword] = useState('');
    const state = useSelector((store: AppStateType) => store.newPassword);

    const token = getCookie('token');

    const changePassword = () => {
        dispatch(newPasswordThunk(token, password))
    };
    const resetError = () => {
        dispatch(isErrorAC(false))
    };


    return (
        <NewPassword changePassword={changePassword}
               resetError={resetError}
               setPassword={setPassword}
               state={state}
               token={token}
        />
    )
};

export default NewPasswordContainer;