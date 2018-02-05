import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";
import {FrontPage} from "../front/front";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('username')user;
  @ViewChild('password')pass;
  constructor(private  fire: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  signInUser(){
    this.fire.auth.signInAndRetrieveDataWithEmailAndPassword(this.user.value,this.pass.value)
      .then(data => {
        console.log('got some data', this.fire.auth.currentUser);
        this.navCtrl.push(FrontPage);
      })
      .catch(error =>{
        console.log('error ', error);
      })
    console.log('Would sign in with', this.user.value, this.pass.value);
  }
}
