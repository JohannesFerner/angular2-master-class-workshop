import {IAlbum} from "./ialbum";
import {AlbumSize} from "./ialbum";

export class Album implements IAlbum {
    name:string;
    artist:string;
    id:number;
    url:string;
    streamable:boolean;

    getImage(size:AlbumSize) {
    }

}