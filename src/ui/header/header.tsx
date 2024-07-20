import Link from "next/link";
import style from "./header.module.scss";
import Image from "next/image";
import logo from "../../../public/logo.svg";

export default function Header(){
    return (
        <header className={style["header"]}>
            <Link className={style["header__logo"]} href={'/preview'}>
            </Link>
            <nav>

            </nav>
        </header>
    );
}