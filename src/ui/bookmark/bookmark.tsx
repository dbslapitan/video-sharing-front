"use client";

import { ChangeEvent } from "react";
import style from "./bookmark.module.scss";

export default function Bookmark({ isBookmarked }: {isBookmarked: boolean}){

    const changeHandler = (event: ChangeEvent) => {
        
    }

    return(
        <input className={`${style["bookmark"]}`} type="checkbox" defaultChecked={isBookmarked} onChange={changeHandler} />
    );
}