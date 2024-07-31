import { getBaseUrl } from "@/libs/constants";
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import axios from "axios";

const BASE_URL = getBaseUrl();

export default async function Preview() {

    const s3Client = new S3Client({region: "ca-central-1"});
    try{
        const { data } = await axios.get(`${BASE_URL}/api/preview`);
        console.log(data);
        const url = await getSignedUrl(s3Client, new GetObjectCommand({Bucket: "video-sharing-preview", Key: '112.jpg'}));

        return(
            <>
                <img src={url} alt="" width={100} height={100}/>
            </>
        );
    }
    catch(e){
        console.log(e);
    }
}