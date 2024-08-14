import Link from "next/link";
import style from "./header.module.scss";
import Navigation from "../navigation/navigation";
import Logo from "../logo/logo";
import Profile from "../profile/profile";
import { getSession, Session } from "@auth0/nextjs-auth0";

export default async function Header(){

      const session = await  getSession();

    return (
        <header className={style["header"]}>
            <Logo />
            <Navigation/>
            <Profile user={session?.user} />
        </header>
    );
}