import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Post} from '../../model/post';

@Component({
  selector: 'page-post-detail',
  templateUrl: 'post-details.html'
})
export class PostDetailsPage {

  private post: Post;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.post = navParams.get('post');
  }

}
