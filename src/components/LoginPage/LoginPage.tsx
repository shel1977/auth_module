import React from 'react';
import style from'./LoginPage.module.css'
import Input from "../Input/Input";
import Button from "../Button/Button";

const LoginPage = () => {
    return (
        <div className={style.loginForm}>
            <h1>Login</h1>
            <Input placeholder={'login'}/>
            <Input placeholder={'password'}/>
            <Button title={'login'}/>
        </div>
    )
};

export default LoginPage