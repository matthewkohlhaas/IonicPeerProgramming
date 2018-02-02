import {Component} from '@angular/core';
import {PostService} from '../../services/post.service';
import {AlertController} from 'ionic-angular';

@Component({
  selector: 'page-create-post',
  templateUrl: 'create-post.html'
})
export class CreatePostPage {

  private author: string;
  private title: string;
  private content: string;

  constructor(public alertController: AlertController, private postService: PostService) {}

  private createPost(): void {
    this.postService.createPost(this.author, this.title, this.content);
    this.alertController.create({
      title: 'Post Created',
      subTitle: 'You have successfully created a new post!',
      buttons: ['Ok']
    }).present();
  }
}
