import React from 'react';
import {NavLink} from "react-router-dom";
import style from './NavLink.module.css'

type ProjLinkProps = {
    to: string
    name: string
};

const ProjLink = (props: ProjLinkProps) => {
    return <NavLink to={props.to} className={style.simpleLink}> {props.name}</NavLink>
};

export default ProjLink;