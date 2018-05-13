import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FriendsTabsIconPage } from '../pages/friends/friends-tabs/friends-tabs';
import { FriendsTabContentPage } from '../pages/friends/friends-tabs-content/friends-tab-content';
import { FriendsService } from '../services/friends.service';
import { HttpModule, JsonpModule, Jsonp } from '@angular/http';
import { WallPage } from '../pages/wall/wall';
import { WallService } from '../services/wall.service';

@NgModule({
    declarations: [
        MyApp,
        HelloIonicPage,
        ItemDetailsPage,
        ListPage,
        FriendsTabsIconPage,
        FriendsTabContentPage,
        WallPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        JsonpModule,
        HttpModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HelloIonicPage,
        ItemDetailsPage,
        ListPage,
        FriendsTabsIconPage,
        FriendsTabContentPage,
        WallPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        FriendsService,
        WallService
    ]
})
export class AppModule { }
