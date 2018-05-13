import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { WallService } from '../../services/wall.service';
import { IWallPost } from '../../models/wall/wall-post';


@Component({
    templateUrl: './wall.html'
})
export class WallPage {
    posts$: Observable<IWallPost[]>;

    constructor(private wallApi: WallService) { 
        this.posts$ = this.wallApi.getPosts();
    }
}