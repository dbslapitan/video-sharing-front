"use client";

import { ChangeEvent } from "react";
import style from "./search.module.scss";
import { useDebouncedCallback } from "use-debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Search(){

    const searchParams = useSearchParams();
    const pathName = usePathname();
    const { replace } = useRouter();

    const search = searchParams.get('search') || "";

    const handleChange = useDebouncedCallback((event: ChangeEvent) => {
        const value = (event.target as HTMLInputElement).value;
        const params = new URLSearchParams(searchParams);
        if(value){
            params.set("search", value);
        }
        else{
            params.delete("search");
        }
        replace(`${pathName}?${params.toString()}`);
    }, 400);

    return(
        <div className={`${style["input"]}`}>
            <input className={`${style["input__bar"]}`} defaultValue={search} type="text" placeholder="Search for movies or TV series" onChange={handleChange}/>
        </div>
    );
}