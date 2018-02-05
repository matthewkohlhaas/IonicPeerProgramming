import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {FrontPage} from '../pages/front/front';
import {LoginPage} from "../pages/login/login";
import {RegisterPage} from "../pages/register/register";

import {PostService} from '../services/post.service';
import {PostDetailsPage} from '../pages/post-details/post-details';
import {CreatePostPage} from '../pages/create-post/create-post';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

const firebaseAuth = {
  apiKey: "AIzaSyBBx8BQb_wbXWvchhn8Iwo_sAFUG34PWC4",
  authDomain: "project-1-dbb42.firebaseapp.com",
  databaseURL: "https://project-1-dbb42.firebaseio.com",
  projectId: "project-1-dbb42",
  storageBucket: "project-1-dbb42.appspot.com",
  messagingSenderId: "597536013302"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CreatePostPage,
    PostDetailsPage,
    FrontPage,
    LoginPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreatePostPage,
    PostDetailsPage,
    FrontPage,
    LoginPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClient,
    PostService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
