import {IAlbum} from "./ialbum";
import {AlbumImageSize} from "./ialbum";

export class Album implements IAlbum {
    streamable:boolean;

    constructor(public id:number, public name:string, public artist:string, public url:string, public images?:Array<any>) {

    }

    getImage(size:AlbumImageSize):string {
        let image = this.images.find((image) => {
            if (image["size"] === size) {
                return image;
            }
        });
        return image ? image["#text"] : "";
    }
}