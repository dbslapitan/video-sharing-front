import style from './trending.module.scss';

export default function Trending({ videos }: {videos: IVideo[]}){
    return (
        <section className={`${style["trending"]}`}>
            <h2 className={`${style["trending__title"]}`}>Trending</h2>
            <div className={`${style["trending__container"]}`}>
                {
                    videos.map(video => {
                        return(
                            <article key={video.id} className={`${style["trending__video"]}`}>
                                <img className={`${style["trending__cover"]}`} src={video.source} />
                            </article>
                        );
                    })
                }
            </div>
        </section>
    );
}