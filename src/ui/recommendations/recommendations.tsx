import Video from "../video/video";
import style from "./recommendations.module.scss";

export default function Recommendations({ videos, bookmarks }: { videos: IVideo[], bookmarks: number[] }) {
    return (
        <section className={`${style["recommendations"]}`}>
            <h2 className={`${style["recommendations__title"]}`}>Recommended for you</h2>
            <div className={`${style["recommendations__container"]}`}>
                {
                    videos.map(video => {
                        return (
                            <Video key={video.id} video={video} isBookmarked={bookmarks.includes(video.id)} isTrending={false} />
                        );
                    })
                }
            </div>
        </section>
    );
}