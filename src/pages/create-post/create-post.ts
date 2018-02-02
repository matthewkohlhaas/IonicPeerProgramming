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
    if (this.author && this.title && this.content && this.author !== '' && this.title !== '' && this.content !== '') {

      this.postService.createPost(this.author, this.title, this.content).subscribe(res => {
        this.alertController.create({
          title: 'Post Created',
          subTitle: 'You have successfully created a new post!',
          buttons: ['Ok']
        }).present();

      }, err => {
        this.alertController.create({
          title: 'Failed to Create Post',
          subTitle: 'App failed to connect to database',
          buttons: ['Ok']
        }).present();
      });

    } else {
      this.alertController.create({
        title: 'Cannot Create Post',
        subTitle: 'Post must have an author, title, and content',
        buttons: ['Ok']
      }).present();
    }
  }
}
