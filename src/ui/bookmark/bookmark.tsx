"use client";

import { ChangeEvent } from "react";
import style from "./bookmark.module.scss";
import axios from "axios";
import { getBaseUrl } from "@/libs/constants";

const BASE_URL = getBaseUrl();

export default function Bookmark({ isBookmarked, videoId }: {isBookmarked: boolean, videoId: number}){

    const changeHandler = async (event: ChangeEvent) => {
        try{
            const {data} = await axios.post(`${BASE_URL}/api/preview/bookmark`, {userId: 0, videoId: videoId});
        }
        catch(e){
            console.log(e);
            (event.target as HTMLInputElement).checked = !(event.target as HTMLInputElement).checked;
        }
    }

    return(
        <input className={`${style["bookmark"]}`} type="checkbox" defaultChecked={isBookmarked} onChange={changeHandler} />
    );
}