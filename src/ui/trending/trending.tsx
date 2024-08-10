import Video from '../video/video';
import style from './trending.module.scss';

export default function Trending({ videos, bookmarks }: {videos: IVideo[], bookmarks: number[]}){
    return (
        <section className={`${style["trending"]}`}>
            <h2 className={`${style["trending__title"]}`}>Trending</h2>
            <div className={`${style["trending__container"]}`}>
                {
                    videos.map(video => {
                        return(
                            <Video key={video.id} video={video}  isBookmarked={bookmarks.includes(video.id)} />
                        );
                    })
                }
            </div>
        </section>
    );
}