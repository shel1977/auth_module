import React from 'react';
import preLoader from "./img/Rolling-0.4s-200px.svg"
import style from "./Preloader.module.css"


let Preloader = () => {

    return (
        <div className={style.preloader}>
            <img src={preLoader}/>
        </div>
    )
}

export default Preloader
