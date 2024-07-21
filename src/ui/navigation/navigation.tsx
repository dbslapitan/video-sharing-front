'use client';

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import style from "./navigation.module.scss";

export default function Navigation(){

    const path = usePathname();
    const isPreview = path.includes('preview');
    const searchParams = useSearchParams();
    const params = searchParams.get("search") ? searchParams.toString() : "";

    return(
        <nav className={style["nav"]}>
            <Link className={`${style["nav__link"]} ${style["nav__link--home"]} ${ path === '/' || path === '/preview' ? style["nav__link--selected"] : ''}`} href={`${ isPreview ? `/preview?${params}` : '/videos'}`}></Link>
            <Link className={`${style["nav__link"]} ${style["nav__link--movies"]} ${ isPreview && path.includes('movies') ? style["nav__link--selected"] : ''}`} href={`/preview/movies?${params}`}></Link>
            <Link className={`${style["nav__link"]} ${style["nav__link--tvs"]} ${ isPreview && path.includes('tv-series') ? style["nav__link--selected"] : ''}`} href={`/preview/tv-series?${params}`}></Link>
            <Link className={`${style["nav__link"]} ${style["nav__link--bookmarks"]} ${ isPreview && path.includes('bookmarks') ? style["nav__link--selected"] : ''}`} href={`/preview/bookmarks?${params}`}></Link>
        </nav>
    );
}