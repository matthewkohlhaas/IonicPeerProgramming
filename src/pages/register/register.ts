import {Component, ViewChild} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {AngularFireAuth, AngularFireAuthModule} from 'angularfire2/auth';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('username')user;
  @ViewChild('password')pass;

  constructor(
    private fire: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertController: AlertController
  ) {}

  regUser(){
    this.fire.auth.createUserWithEmailAndPassword(this.user.value,this.pass.value)
      .then(data => {
        this.alertController.create({
          title: 'Registration Successful',
          subTitle: 'You have successfully registered a new account!',
          buttons: ['Ok']
        }).present();
      })
      .catch(error => {
        this.alertController.create({
          title: 'Registration Failed',
          subTitle: 'A new account could not be registered with that email and password.',
          buttons: ['Ok']
        }).present();
      });
  }

}
