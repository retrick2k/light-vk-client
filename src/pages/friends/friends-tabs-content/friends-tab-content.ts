import { Component, ViewChild } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { IFriend } from '../../../models/friends/friend';
import { Observable } from 'rxjs/Observable';


@Component({
    templateUrl: './friends-tab-content.html'
})
export class FriendsTabContentPage {
    friends: Observable<IFriend[]>;
    constructor(navParams: NavParams) { 
        this.friends = navParams.get('friends');
    }
}