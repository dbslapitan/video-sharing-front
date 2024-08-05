'use client';

import { useSearchParams } from 'next/navigation';
import style from './logo.module.scss';
import Link from 'next/link';

export default function Logo(){

    const searchParam = useSearchParams();

    const search = searchParam.get('search') ? searchParam.toString() : "";

    return (
        <Link className={style["logo"]} href={`/?${search}`}>
        </Link>
    );
}