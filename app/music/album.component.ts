import {Component} from "angular2/core";
import {RouteParams} from "angular2/router"

@Component({
    selector: "album-component",
    template: `<h1>AlbumComponent</h1>
    `
})
export class AlbumComponent {
    constructor(private routeParams:RouteParams) {
        console.log(this.routeParams.get('id'));
    }
}
