import Bookmark from '../bookmark/bookmark';
import style from './trending.module.scss';

export default function Trending({ videos, bookmarks }: {videos: IVideo[], bookmarks: number[]}){
    return (
        <section className={`${style["trending"]}`}>
            <h2 className={`${style["trending__title"]}`}>Trending</h2>
            <div className={`${style["trending__container"]}`}>
                {
                    videos.map(video => {
                        return(
                            <article key={video.id} className={`${style["video"]}`}>
                                <h3 className={`${style["video__title"]}`}>{video.title}</h3>
                                <p className={`${style["video__info"]}`}>{video.year} <span className={`oval`}></span> <span className={`${style["video__category"]} ${video.category === "Movie" ? style["video__category--movie"] : style["video__category--tv"]}`}>{video.category}</span>  <span className={`oval`}></span> {video.rating}</p>
                                <Bookmark videoId={video.id} isBookmarked={bookmarks.includes(video.id)}/>
                                <img className={`${style["video__cover"]}`} src={video.source} />
                            </article>
                        );
                    })
                }
            </div>
        </section>
    );
}