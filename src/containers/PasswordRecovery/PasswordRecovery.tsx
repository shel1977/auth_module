import React from 'react';
import '../../App.css';
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Preloader from "../../assets/Preloader";
import {Redirect} from 'react-router-dom';

type IPropsType = {
    setMail: (type: string) => void
    signIn: () => void
    resetError: () => void
    token: string | null
    state: {
        isSendingSwitch: boolean
        isErrorShow: boolean
        isSendOkShow: boolean
        userLogged: boolean
    }
}

const PasswordRecovery: React.FC<IPropsType> = ({signIn, setMail, resetError, token, state}) => {
    const onChangeMail = (e: string | boolean) => {
        if (state.isErrorShow) {
            resetError()
        }
        if (typeof e === "string")
            setMail(e)
    };
    if (token !== null) {
        return <Redirect to={'/profile'} />
    }
    return (
        <div className="form">
            <h1>Password recovery</h1>
            <div>
                <div>
                    <div>
                        <span>Your E-mail </span>
                    </div>
                    <Input type={'input'} onChange={onChangeMail} placeholder={'Your E-mail'}/>
                </div>
                <div>
                    {
                        state.isErrorShow ?
                            <span>WRONG EMAIL</span> : ""
                    }
                </div>
            </div>
            {state.isSendingSwitch ?
                <Preloader/> :
                <Button name={'send'} onClick={signIn}/>
            }
        </div>
    );
}

export default PasswordRecovery;