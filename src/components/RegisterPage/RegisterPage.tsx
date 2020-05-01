import React from 'react';
import style from'./RegisterPage.module.css'

import Input from "../Input/Input";
import Button from "../Button/Button";

const RegisterPage = () => {
    return (
        <div className={style.regForm}>
            <h1>Registration</h1>
            <Input placeholder={'login'}/>
            <Input placeholder={'new password'}/>
            <Input placeholder={'confirm new password'}/>
            <Button title={'register'}/>
        </div>
    )
};

export default RegisterPage