import {Component} from "angular2/core";
import {RouteParams} from "angular2/router"

@Component({
    selector: "album-component",
    template: `<h1>AlbumComponent</h1>
    `,
    providers: [RouteParams]
})
export class AlbumComponent {
}
