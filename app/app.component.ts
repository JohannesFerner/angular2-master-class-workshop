import {Component} from "angular2/core";
import {RouteConfig, RouterOutlet} from "angular2/router";

import {FooterComponent} from "./core/footer.component";
import {HeaderComponent} from "./core/header.component";
import {PaginationComponent} from "./core/pagination.component";
import {WelcomeComponent} from "./core/welcome.component";
import {AlbumsComponent} from "./music/albums.component";
import {AlbumComponent} from "./music/album.component";
import {LoginComponent} from "./user/login.component";
import {RegisterComponent} from "./user/register.component";


@Component({
    selector: "my-app",
    template: `
        <header-component></header-component>
        <router-outlet></router-outlet>
        <footer-component></footer-component>
    `,
    directives: [FooterComponent, HeaderComponent, PaginationComponent, WelcomeComponent, AlbumComponent,
        AlbumsComponent, LoginComponent, RegisterComponent, RouterOutlet]
})
@RouteConfig([
    {name: "Home", path: "/", component: WelcomeComponent, useAsDefault: true},
    {name: "Login", path: "/login", component: LoginComponent},
    {name: "Register", path: "/register", component: RegisterComponent},
    {name: "Albums", path: "/albums", component: AlbumsComponent},
    {name: "Album", path: "/album/:id", component: AlbumComponent}
])
export class AppComponent {
}
