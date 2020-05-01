import React from 'react';
import style from'./NewPassPage.module.css'
import Input from "../Input/Input";
import Button from "../Button/Button";

const NewPassPage = () => {
    return (
        <div className={style.passForm}>
            <h1>Input new password</h1>
            <Input placeholder={'new pass'}/>
            <Input placeholder={'confirm pass'}/>
            <Button title={'ok'}/>
        </div>
    )
};

export default NewPassPage