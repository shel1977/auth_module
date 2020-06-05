import React from 'react';
import '../../App.css';
import Input from "../../components/Input/Input";
import Preloader from "../../assets/Preloader";
import Button from "../../components/Button/Button";
import ProjLink from "../../components/NavLink/NavLink";
import {Redirect} from "react-router-dom";

type IPropsType = {
    setPassword: (type: string) => void
    changePassword: () => void
    resetError: () => void
    token: string | null
    state: {
        isSendingSwitch: boolean
        isErrorShow: boolean
        isSendOkShow: boolean
    }
}


const NewPassword: React.FC<IPropsType> = ({changePassword, setPassword, resetError,token, state}) => {

    const onChangePassword = (e: string | boolean) => {
        if (state.isErrorShow) {
            resetError()
        }
        if (typeof e === "string")
            setPassword(e)
    };

    if (token === null) {
        return <Redirect to={'/login'} />
    }

    return (
        <div className="form">
            <h1>New Pass</h1>

            <div>
                <div>
                    <div>
                        <span>New password </span>
                    </div>
                    <Input onChange={onChangePassword} type={'password'} placeholder={'Password'}/>
                </div>

            </div>
            <div>
                {state.isSendingSwitch ?
                    <Preloader/> :
                    <Button name={'Change password'} onClick={changePassword}/>
                }
            </div>
            <div>
                <ProjLink name={'profile'} to={'/profile'}/>
            </div>
        </div>
    );
}

export default NewPassword;