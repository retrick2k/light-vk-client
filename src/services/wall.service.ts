import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpParams } from '@angular/common/http';
import { IFriend } from '../models/friends/friend';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { _throw } from 'rxjs/observable/throw'
import * as requestsData from '../app/api-data';

import {JsonpModule, Jsonp, Response} from '@angular/http';
import { IWallPost } from '../models/wall/wall-post';

@Injectable()
export class WallService {    
    constructor(private jsonp: Jsonp) { }

    getPosts(): Observable<any | IWallPost[]> {        
        const params = {
            user_id: requestsData.USER_ID,            
            access_token: requestsData.ACCESS_TOKEN,
            version: '5.74',
            callback: 'JSONP_CALLBACK'
        };
        const httpParams = Object.getOwnPropertyNames(params).reduce((p, key) => p.set(key, params[key]), new HttpParams());
        
        const url = 'https://api.vk.com/method/wall.get?';
        return this.jsonp.get(url, { params: httpParams.toString() })
            .map((r) => {
                const response: any[] = r.json().response as any[];
                return response.slice(1, response.length) as IWallPost[];
            })
            .catch((error) => _throw(error));
    }
}