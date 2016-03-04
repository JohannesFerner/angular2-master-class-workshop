import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {Observable} from "rxjs/observable";
import "rxjs/operator/map";
import {IAlbum} from "../models/ialbum";
import {Album} from "../models/album";

@Injectable() // make the music-service injectable
export class MusicService {

    private apiKey:string = "78086a2cb461f335235cdd822b8c5b4d";

    constructor(private http:Http) {
    }

    albumSearch(query:string, page:number = 0) {
        return new Observable((observable:any) => {
            this.http.get(this.getApiUrl(query, page))
                .retry(3)
                .map((res:any) => {
                    res = res.json();

                    var albums:Array<IAlbum> = [];

                    let results = res.results;

                    results.albummatches.album.forEach(data => {
                        albums.push(new Album(data["mbid"], data["name"], data["artist"], data["url"], data["image"]));
                    });

                    observable.next({
                        albums: albums
                    });
                });
        });
    }

    private getApiUrl(query:string, page:number) {
        let base = "http://ws.audioscrobbler.com/";
        let url = base + "2.0/?method=album.search&album=" + query +
            "&page=" + page +
            "&api_key=" + this.apiKey + "&format=json";

        return url;
    }

}
