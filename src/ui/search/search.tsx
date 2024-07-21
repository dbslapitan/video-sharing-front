"use client";

import { ChangeEvent } from "react";
import style from "./search.module.scss";
import { useDebouncedCallback } from "use-debounce";

export default function Search(){

    const handleChange = useDebouncedCallback((event: ChangeEvent) => {
        console.log((event.target as HTMLInputElement).value);
    }, 400);

    return(
        <div className={`${style["input"]}`}>
            <input className={`${style["input__bar"]}`} type="text" placeholder="Search for movies or TV series" onChange={handleChange}/>
        </div>
    );
}