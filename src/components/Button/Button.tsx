import React from 'react';
import style from './Button.module.css'

type ButtonProps = {
    title: string,

}

const Button = (props: ButtonProps) => {
return <button className={style.simpleButton}>{props.title}</button>
};

export default Button;