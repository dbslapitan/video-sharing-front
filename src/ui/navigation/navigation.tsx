'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./navigation.module.scss";

export default function Navigation(){

    const path = usePathname();
    const isPreview = path.includes('preview');

    return(
        <nav className={style["nav"]}>
            <Link className={`${style["nav__link"]} ${style["nav__link--home"]} ${ path === '/' || path === '/preview' ? style["nav__link--selected"] : ''}`} href={'/preview'}></Link>
            <Link className={`${style["nav__link"]} ${style["nav__link--movies"]} ${ isPreview && path.includes('movies') ? style["nav__link--selected"] : ''}`} href={'/preview/movies'}></Link>
            <Link className={`${style["nav__link"]} ${style["nav__link--tvs"]} ${ isPreview && path.includes('tv-series') ? style["nav__link--selected"] : ''}`} href={'/preview/tv-series'}></Link>
            <Link className={`${style["nav__link"]} ${style["nav__link--bookmarks"]} ${ isPreview && path.includes('bookmarks') ? style["nav__link--selected"] : ''}`} href={'/preview/bookmarks'}></Link>
        </nav>
    );
}