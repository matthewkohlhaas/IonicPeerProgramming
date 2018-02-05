import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(private fire: AngularFireAuth , public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  regUser(){
    this.fire.auth.createUserWithEmailAndPassword(this.user.value,this.pass.value)
      .then(data => {console.log('got data')})
      .catch(error => {
        console.log('got error', error)
      })
    console.log('User with password sign in', this.user.value, this.pass.value);
  }

}
