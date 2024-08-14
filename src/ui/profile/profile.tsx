"use client";

import style from "./profile.module.scss";
import profilePic from "../../../public/image-avatar.png";
import isPreview from "@/libs/url";
import { Claims } from "@auth0/nextjs-auth0";

export default function Profile({user}: {user: Claims | undefined}){
    console.log(user);

    return(
        <>
            {isPreview() ? <img className={`${style["profile__image"]}`} src={profilePic.src}/> : null}
            {!isPreview() && !user ? <a className={`${style["profile__auth"]}`} href="/api/auth/login">login</a> : null}
            {!isPreview() && user ?  <a className={`${style["profile__auth"]}`} href="/api/auth/logout">logout</a> : null}
        </>
    );
}