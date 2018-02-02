import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PostService} from '../../services/post.service';
import {PostDetailsPage} from '../post-details/post-details';
import {Post} from '../../model/post';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private postService: PostService) {}

  private openPostDetailPage(post: Post): void {
    this.navCtrl.push(PostDetailsPage, {
      post: post
    });
  }
}
