import style from "./bookmark.module.scss";

export default function Bookmark(){
    return(
        <input className={`${style["bookmark"]}`} type="checkbox" />
    );
}