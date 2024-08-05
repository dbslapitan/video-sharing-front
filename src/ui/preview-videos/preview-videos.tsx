import Trending from "../trending/trending";

export default function PreviewVideos({ trending, recommendations }: { trending: IVideo[], recommendations: IVideo[]}){
    return (
        <div>
            <Trending videos={trending} />
        </div>
    );
}