import Bookmark from "../bookmark/bookmark";
import style from "./video.module.scss";

export default function Video({video, isBookmarked}: {video: IVideo, isBookmarked: boolean}) {
    return (
        <article className={`${style["video"]}`}>
            <h3 className={`${style["video__title"]}`}>{video.title}</h3>
            <p className={`${style["video__info"]}`}>{video.year} <span className={`oval`}></span> <span className={`${style["video__category"]} ${video.category === "Movie" ? style["video__category--movie"] : style["video__category--tv"]}`}>{video.category}</span>  <span className={`oval`}></span> {video.rating}</p>
            <Bookmark videoId={video.id} isBookmarked={isBookmarked} />
            <img className={`${style["video__cover"]}`} src={video.source} />
        </article>
    );
}