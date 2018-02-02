import {Component, OnInit} from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {PostService} from '../../services/post.service';
import {PostDetailsPage} from '../post-details/post-details';
import {Post} from '../../model/post';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  private posts: Post[];

  constructor(
    public navCtrl: NavController,
    public alertController: AlertController,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.posts = [];

    this.postService.getPosts().subscribe(posts => {
      this.posts = Object.keys(posts).map(key => posts[key]);
    }, err => {
      this.alertController.create({
        title: 'Failed to Load Posts',
        subTitle: 'App failed to connect to database',
        buttons: ['Ok']
      }).present();
    });
  }

  private openPostDetailPage(post: Post): void {
    this.navCtrl.push(PostDetailsPage, {
      post: post
    });
  }
}
