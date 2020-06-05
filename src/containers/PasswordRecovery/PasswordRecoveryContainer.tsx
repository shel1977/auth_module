import {useDispatch, useSelector} from "react-redux";
import React, {useState} from 'react';
import PasswordRecovery from "./PasswordRecovery";
import {isErrorAC, recoveryThunk} from "../../bll/reducers/passwordRecoveryReducer";
import {AppStateType} from "../../bll/store";

const PasswordRecoveryContainer: React.FC = () => {

    const dispatch = useDispatch();
    const [email, setMail] = useState('');
    const state = useSelector((store: AppStateType) => store.passwordRecovery);

    const signIn = () => {
        dispatch(recoveryThunk(email))
    };
    const resetError = () => {

        dispatch(isErrorAC(false))
    };

    const getCookie = (name: string): string | null => {
        const matches = document.cookie.match(new RegExp(
            '(?:^|; )' + name.replace(/([.$?*|{}()\]\\^])/g, '\\$1') + '=([^;]*)'
        ));
        return matches ? decodeURIComponent(matches[1]) : null;
    };

    const token = getCookie('token');


    return (
        <PasswordRecovery signIn={signIn}
               resetError={resetError}
               setMail={setMail}
               state={state}
               token={token}

        />
    )
};

export default PasswordRecoveryContainer;