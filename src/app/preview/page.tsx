import { getBaseUrl } from "@/libs/constants";
import PreviewVideos from "@/ui/preview-videos/preview-videos";
import axios from "axios";

const BASE_URL = getBaseUrl();

export default async function Preview() {

    try{
        const { data: trending } = await axios.get(`${BASE_URL}/api/preview/trending`);
        const { data: recommendations } = await axios.get(`${BASE_URL}/api/preview/recommendations`);
        const { data: bookmakrs } = await axios.get(`${BASE_URL}/api/preview/bookmarks/0`);
        
        return (
            <PreviewVideos trending={trending} recommendations={recommendations} bookmarks={bookmakrs} />
        );
    }
    catch(e){
        console.log(e);
    }
}