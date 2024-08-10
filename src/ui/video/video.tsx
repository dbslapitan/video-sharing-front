import Bookmark from "../bookmark/bookmark";
import style from "./video.module.scss";

export default function Video({video, isBookmarked, isTrending = true}: {video: IVideo, isBookmarked: boolean, isTrending?: boolean}) {
    return (
        <article className={`${style["video"]}`}><Bookmark videoId={video.id} isBookmarked={isBookmarked} />
            <img className={`${style["video__cover"]} ${isTrending ? "" :  style["video__cover--recommend"]}`} src={video.source} />
            <p className={`${style["video__info"]} ${isTrending ? "" :  style["video__info--recommend"]}`}>{video.year} <span className={`oval`}></span> <span className={`${style["video__category"]} ${video.category === "Movie" ? style["video__category--movie"] : style["video__category--tv"]}`}>{video.category}</span>  <span className={`oval`}></span> {video.rating}</p>
            <h3 className={`${style["video__title"]} ${isTrending ? "" :  style["video__title--recommend"]}`}>{video.title}</h3>
        </article>
    );
}