import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpParams } from '@angular/common/http';
import { IFriend } from '../models/friends/friend';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { _throw } from 'rxjs/observable/throw'
import * as requestsData from '../app/api-data';

import {JsonpModule, Jsonp, Response} from '@angular/http';

@Injectable()
export class FriendsService {    
    constructor(private jsonp: Jsonp) { }

    getFriends(): Observable<any | IFriend[]> {        
        const params = {
            user_id: requestsData.USER_ID,
            order: 'hints',
            fields: 'domain,photo_50',
            name_case: 'nom',
            access_token: requestsData.ACCESS_TOKEN,
            version: '5.74',
            callback: 'JSONP_CALLBACK'
        };
        const httpParams = Object.getOwnPropertyNames(params).reduce((p, key) => p.set(key, params[key]), new HttpParams());
        
        const url = 'https://api.vk.com/method/friends.get?';
        return this.jsonp.get(url, { params: httpParams.toString() })
            .map((r) => r.json().response as IFriend[])
            .catch((error) => _throw(error));
    }
}