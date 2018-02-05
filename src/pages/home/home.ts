import {Component, OnInit} from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {PostService} from '../../services/post.service';
import {PostDetailsPage} from '../post-details/post-details';
import {Post} from '../../model/post';
import {LoginPage} from "../login/login";
import {RegisterPage} from "../register/register";
import {FrontPage} from "../front/front";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  signIn() {
    this.navCtrl.push(LoginPage);

  }

  reg() {
    this.navCtrl.push(RegisterPage);

  }
  guest() {
    this.navCtrl.setRoot(FrontPage, {}, {animate: true, direction: 'forward'});
  }
}
