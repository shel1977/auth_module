import React from 'react';
import style from './NavLink.module.css'
import {NavLink} from 'react-router-dom';

type LinkComponentProps = {
    title: string,
    to: string
}

const LinkComponent = (props: LinkComponentProps) => {
    return <NavLink to={props.to} className={style.simpleLink}>{props.title}</NavLink>
};

export default LinkComponent;