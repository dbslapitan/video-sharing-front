import { usePathname } from "next/navigation";

export function isPreview(){
    const url = usePathname();
    const urlArray = url.split("/");
    return urlArray[1].toLowerCase() === "preview";
}

export function isPreviewMovies(){
    const url = usePathname();
    const urlArray = url.split("/");
    return  urlArray[1].toLowerCase() === "preview" && urlArray[2].toLowerCase() === "movies";
}

export function isPreviewTvs(){
    const url = usePathname();
    const urlArray = url.split("/");
    return  urlArray[1].toLowerCase() === "preview" && urlArray[2].toLowerCase() === "tv-series";
}

export function isPreviewBookmarks(){
    const url = usePathname();
    const urlArray = url.split("/");
    return  urlArray[1].toLowerCase() === "preview" && urlArray[2].toLowerCase() === "bookmarks";
}