import { getBaseUrl } from "@/libs/constants";
import PreviewVideos from "@/ui/preview-videos/preview-videos";
import axios from "axios";

const BASE_URL = getBaseUrl();

export default async function Preview() {

    try{
        const { data: trending } = await axios.get(`${BASE_URL}/api/preview/trending`);
        const { data: recommended } = await axios.get(`${BASE_URL}/api/preview/recommended`);
        return (
            <PreviewVideos trending={trending} recommendations={recommended} />
        );
    }
    catch(e){
        console.log(e);
    }
}