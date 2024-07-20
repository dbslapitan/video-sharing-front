'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./navigation.module.scss";

export default function Navigation(){

    const path = usePathname();
    console.log(path);

    return(
        <nav className={style["nav"]}>
            <Link className={`${style["nav__link"]} ${style["nav__link--home"]}`} href={'/preview'}></Link>
            <Link className={`${style["nav__link"]} ${style["nav__link--movies"]}`} href={'/preview/movies'}></Link>
            <Link className={`${style["nav__link"]} ${style["nav__link--tvs"]}`} href={'/preview/tv-series'}></Link>
            <Link className={`${style["nav__link"]} ${style["nav__link--bookmarks"]}`} href={'/preview/bookmarks'}></Link>
        </nav>
    );
}