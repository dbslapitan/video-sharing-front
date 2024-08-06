import style from "./bookmark.module.scss";

export default function Bookmark({ isBookmarked }: {isBookmarked: boolean}){
    return(
        <input className={`${style["bookmark"]}`} type="checkbox" defaultChecked={isBookmarked} />
    );
}