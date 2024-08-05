import Link from "next/link";
import style from "./header.module.scss";
import Navigation from "../navigation/navigation";
import profilePic from "../../../public/image-avatar.png";
import Logo from "../logo/logo";

export default function Header(){

    return (
        <header className={style["header"]}>
            <Logo />
            <Navigation/>
            <img className={`${style["header__profile"]}`} src={profilePic.src}/>
        </header>
    );
}