export interface IAlbum {
    name: string;
    artist: string;
    id: number;
    url: string;
    streamable: boolean;

    getImage(size:AlbumSize);
}

export enum AlbumSize {
    SMALL = <string>"small",
    MEDIUM = <string>"medium",
    LARGE = <string>"large"
}
