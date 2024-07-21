"use client";

import style from "./search.module.scss";

export default function Search(){

    return(
        <div className={`${style["input"]}`}>
            <input className={`${style["input__bar"]}`} type="text" placeholder="Search for movies or TV series"/>
        </div>
    );
}