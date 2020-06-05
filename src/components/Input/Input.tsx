import React, {ChangeEvent} from 'react';
import style from './Input.module.css'

type InputProps = {
    type: string
    onChange: (value: string | boolean) => void
    placeholder?: string
};

const Input = (props: InputProps) => {

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (props.type === "input" || "password") {
            props.onChange(event.target.value)
        } else if (props.type === "checkbox") {
            props.onChange(event.target.checked)
        }
    };

    return <div>
        <input
            type={props.type}
            placeholder={props.placeholder}
            onChange={onInputChange}
            className={props.type === "checkbox" ? style.checkbox : style.simplePlaceholder}
        />
        <label>
            {props.type === "checkbox" ? props.placeholder : ''}
        </label>
    </div>
};

export default Input;