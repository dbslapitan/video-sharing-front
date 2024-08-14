import { usePathname } from "next/navigation";

export default function isPreview(){
    const url = usePathname();
    const urlArray = url.split("/");
    return urlArray[1].toLowerCase() === "preview";
}