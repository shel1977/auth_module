import React from 'react';
import '../../App.css';
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Preloader from "../../assets/Preloader";
import ProjLink from "../../components/NavLink/NavLink";
import {Redirect} from "react-router-dom";

type IPropsType = {
    setMail: (type: string) => void
    setPassword: (type: string) => void
    resetError: () => void
    signIn: () => void
    token:  string | null
    state: {
        isSendingSwitch: boolean
        isErrorShow: boolean
        isSendOkShow: boolean
    }
}


const Register: React.FC<IPropsType> = ({signIn, setMail, setPassword, resetError, token, state}) => {
    const onChangeMail = (e: string | boolean) => {
        if (state.isErrorShow) {
            resetError()
        }
        if (typeof e === "string")
            setMail(e)
    };
    const onChangePassword = (e: string | boolean) => {
        if (state.isErrorShow) {
            resetError()
        }
        if (typeof e === "string")
            setPassword(e)
    };
    if (token !== null) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div className="form">
            <h1>Register</h1>
            <div>
                <div>
                    <span>Your Email</span> <Input
                    type={'input'}
                    placeholder={'e-mail'}
                    onChange={onChangeMail}/>
                </div>
                <div>
                    <span>Your Password</span> <Input type={'password'}
                                                      placeholder={'create password'}
                                                      onChange={onChangePassword}/>
                </div>
                <div>
                    {state.isErrorShow ? <span>user already exists</span> : null}
                    {state.isSendOkShow ? <ProjLink to={'/login'} name={'register complete, please login'}/> : null}
                </div>

                {state.isSendingSwitch ? <Preloader/>
                    : <Button name={'Register'} onClick={signIn}/>
                }            </div>

        </div>
    );
}

export default Register;