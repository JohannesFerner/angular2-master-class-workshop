import {Injectable} from "angular2/core";
import {Http} from "angular2/http";


@Injectable() // make the music-service injectable
export class MusicService {

    private apiKey:string = "78086a2cb461f335235cdd822b8c5b4d";

    constructor(private http:Http) {
    }

    albumSearch(query:string, page:number = 0) {
        this.http.get(this.getApiUrl(query, page))
        .retry(3);
    }

    private getApiUrl(query:string, page:number) {
        let base = "http://ws.audioscrobbler.com/";
        let url = base + "2.0/?method=album.search&album=" + query +
            "&page=" + page +
            "&api_key=" + this.apiKey + "&format=json";

        return url;
    }

}
