import React from 'react';
import '../../App.css';
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Preloader from "../../assets/Preloader";
import { Redirect } from 'react-router-dom';
import ProjLink from "../../components/NavLink/NavLink";

type IPropsType = {
    setMail: (type: string) => void
    setPassword: (type: string) => void
    setRememberMe: (type: boolean) => void
    signIn: () => void
    resetError: () => void
    token: string | null
    state: {
        isSendingSwitch: boolean
        isErrorShow: boolean
        isSendOkShow: boolean
    }
}

const Login: React.FC<IPropsType> = ({signIn, setMail, setPassword, setRememberMe, resetError,token, state}) => {
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
    const onChangeRememberMe = (e: string | boolean
    ) => {
        if (typeof e === "boolean")
        setRememberMe(e)
    };
    if (state.isSendOkShow || token !== null) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div className="form">
            <h1>Login</h1>
            <div>
                <div>
                    <div>
                        <span>Your E-mail </span>
                    </div>
                    <Input type={'input'} onChange={onChangeMail} placeholder={'Your E-mail'}/>
                </div>
                <div>
                    <div>
                        <span>Your password </span>
                    </div>
                    <Input onChange={onChangePassword} type={'password'} placeholder={'Password'}/>
                </div>
                <div>
                    {state.isErrorShow ?
                        <span>WRONG EMAIL OR PASSWORD</span> :
                        <Input onChange={onChangeRememberMe} type={'checkbox'} placeholder={'Remember me'}/>
                    }
                </div>
            </div>
            <div>
                {state.isSendingSwitch ?
                    <Preloader/> :
                    <Button name={'login'} onClick={signIn}/>
                }
            </div>
            <div>
                <ProjLink name={'register'} to={'/register'}/>
                <ProjLink name={'forgot pass'} to={'/passwordrecovery'}/>
            </div>

        </div>
    );
};

export default Login;
