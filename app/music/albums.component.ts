import {Component, OnInit} from "angular2/core";
import {RouterLink} from "angular2/router";
import {MusicService} from "./services/music.service"
import {IAlbum} from "./models/ialbum";
import {EllipsisPipe} from "../core/pipes/ellipsis.pipe";

@Component({
    selector: "albums-component",
    template: `<h1>Albums</h1>

    <ul>
        <li *ngFor="#album of albums" [routerLink]="['Album', {id: album.id}]" >{{album.name | ellipsis: 15}}</li>
    </ul>
    `,
    providers: [MusicService],
    directives: [RouterLink],
    pipes: [EllipsisPipe]
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
