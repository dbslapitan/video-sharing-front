import Link from "next/link";
import style from "./header.module.scss";
import Navigation from "../navigation/navigation";
import profilePic from "../../../public/image-avatar.png";

export default function Header(){

    return (
        <header className={style["header"]}>
            <Link className={style["header__logo"]} href={'/preview'}>
            </Link>
            <Navigation/>
            <img className={`${style["header__profile"]}`} src={profilePic.src}/>
        </header>

    );
}