import React from 'react';
import style from './Button.module.css'

type ButtonProps = {
    name: string
    onClick?: () => void
    disabled?: boolean
};

const Button = (props: ButtonProps) => {
    const {name, onClick, disabled} = props;
    return <button onClick={(event)=> { onClick?.() }}
                   className={props.disabled ? style.btnDisabled: style.simpleButton}
                   disabled={props.disabled}>{name}</button>
}

export default Button;