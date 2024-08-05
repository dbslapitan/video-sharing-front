import { getBaseUrl } from "@/libs/constants";
import axios from "axios";

const BASE_URL = getBaseUrl();

export default async function Preview() {

    try{
        const { data: trending } = await axios.get(`${BASE_URL}/api/preview/trending`);
        const { data: recommended } = await axios.get(`${BASE_URL}/api/preview/recommended`);
        return (
            <>
            </>
        );
    }
    catch(e){
        console.log(e);
    }
}