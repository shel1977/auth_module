import React from 'react';
import style from './Input.module.css'


type InputProps = {
    placeholder: string
}

const Input = (props: InputProps) => {
    return <input placeholder={props.placeholder} className={style.simplePlaceholder}/>
}

export default Input