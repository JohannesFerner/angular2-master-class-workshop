import {Component, OnInit} from "angular2/core";
import {RouterLink} from "angular2/router";
import {MusicService} from "./services/music.service"
import {IAlbum} from "./models/ialbum";

@Component({
    selector: "albums-component",
    template: `<h1>Albums</h1>

    <ul>
        <li *ngFor="#album of albums">{{album.name}}</li>
    </ul>
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
