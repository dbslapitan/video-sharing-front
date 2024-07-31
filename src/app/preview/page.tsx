import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export default async function Preview() {

    const s3Client = new S3Client({region: "ca-central-1"});
    try{
        const url = await getSignedUrl(s3Client, new GetObjectCommand({Bucket: "video-sharing-preview", Key: '112.jpg'}));
        console.log(url);

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