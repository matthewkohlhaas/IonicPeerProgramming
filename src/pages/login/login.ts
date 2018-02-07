import {Component, ViewChild} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";
import {FrontPage} from "../front/front";
import {HomePage} from "../home/home";

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
  constructor(
    private fire: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertController: AlertController
  ) {}

  signInUser(){
    this.fire.auth.signInAndRetrieveDataWithEmailAndPassword(this.user.value,this.pass.value)
      .then(data => {
        this.navCtrl.setRoot(FrontPage, {}, {animate: true, direction: 'forward'});
      })
      .catch(error =>{
        this.alertController.create({
          title: 'Login Failed',
          subTitle: 'You cannot login with that email and password.',
          buttons: ['Ok']
        }).present();
      })
  }
}
