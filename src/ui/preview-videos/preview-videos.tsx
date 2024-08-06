import Trending from "../trending/trending";

export default function PreviewVideos({ trending, recommendations, bookmarks }: { trending: IVideo[], recommendations: IVideo[], bookmarks: number[] }){
    return (
        <div>
            <Trending videos={trending} bookmarks={bookmarks} />
        </div>
    );
}