export interface IAlbum {
    name: string;
    artist: string;
    id: number;
    url: string;
    streamable: boolean;

    getImage(size:AlbumImageSize);
}

export enum AlbumImageSize {
    SMALL = <any>"small",
    MEDIUM = <any>"medium",
    LARGE = <any>"large"
}
