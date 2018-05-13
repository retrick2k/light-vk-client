import { Component, ViewChild } from '@angular/core';
import { FriendsTabContentPage } from '../friends-tabs-content/friends-tab-content';
import { FriendsService } from '../../../services/friends.service';
import { IFriend } from '../../../models/friends/friend';
import { Observable } from 'rxjs/Observable';
@Component({
    template: `
    <ion-tabs>
      <ion-tab tabTitle="Друзья" [rootParams]="friendsTabParams" [root]="friendsTab"></ion-tab>
      <ion-tab tabTitle="Друзья онлайн" [rootParams]="friendsOnlineTabParams" [root]="onlineFriendsTab"></ion-tab>
    </ion-tabs>`
})
export class FriendsTabsIconPage {
    friendsTab: any;
    onlineFriendsTab: any;
    friends$: Observable<IFriend[]>;
    friendsOnline$: Observable<IFriend[]>;
    friendsTabParams: any;
    friendsOnlineTabParams: any;

    constructor(private friendsApi: FriendsService) {
        this.friendsTab = FriendsTabContentPage;
        this.onlineFriendsTab = FriendsTabContentPage;

        this.friends$ = this.friendsApi.getFriends();
        this.friendsTabParams = { friends: this.friends$ };

        this.friendsOnline$ = this.friendsApi.getFriends()
            .map((data: IFriend[]) => data.filter((friend) => friend.online === 1));
        this.friendsOnlineTabParams = { friends: this.friendsOnline$ };
    }
}