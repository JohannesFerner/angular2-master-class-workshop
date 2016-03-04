import  {Component, OnInit} from "angular2/core";

import  {MusicService} from "./services/music.service"
import {IAlbum} from "./models/ialbum";

@Component({
    selector: "albums-component",
    template: `<h1>AlbumsComponent</h1>
    `,
    providers: [MusicService]
})
export class AlbumsComponent {

    public albums:Array<IAlbum> = [];

    ngOnInit() {
        this.musicService.albumSearch('Nickelback', 1)
            .subscribe(results => {
                this.albums = results.albums;
            });
    }

    constructor(private musicService:MusicService) {
    }
}
