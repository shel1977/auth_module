import React from 'react';
import style from'./RecoverPassPage.module.css'

import Input from "../Input/Input";
import Button from "../Button/Button";

const RecoverPassPage = () => {
    return (
        <div className={style.recoverForm}>
            <h1>Recover password</h1>
            <Input placeholder={'login'}/>
            <Input placeholder={'new password'}/>
            <Input placeholder={'confirm new password'}/>
            <Button title={'confirm'}/>
        </div>
    )
};

export default RecoverPassPage