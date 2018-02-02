import {Injectable} from '@angular/core';
import {Post} from '../model/post';

@Injectable()
export class PostService {

  private posts: Post[];

  constructor() {
    this.posts = [
      {
        author: 'Matthew Kohlhaas',
        title: 'Georgia Tech Loses to Virginia',
        content: 'It\'s unfortunate that we lost so badly when facing the ACC\'s #1 team, but you just cant get past '
        + 'that ironclad defense. It\'s no surprise that their defense is rated #1 in the nation.'
      }, {
        author: 'Buzz',
        title: '...',
        content: 'bzzzzzzzzzzz!'
      }, {
        author: 'Guy Flannigan',
        title: 'Hey guys, it\'s me, Guy!',
        content: 'I just wanted to say hello. I am new to this school, and I\'d like to know what cool things there are'
        + ' to do around Tech.'
      }, {
        author: 'Paul Forrester',
        title: 'Hell Week Really Sucks!',
        content: 'Anybody else here agree?'
      }, {
        author: 'Phillip Travers',
        title: 'This App is Really Cool',
        content: 'Wow, you can do a lot of cool stuff with this app. It\'s really cool.'
      }, {
        author: 'Matthew Kohlhaas',
        title: 'Georgia Tech Beats Syracuse',
        content: 'Yeah, man! We broke that four game losing streak! Air ball! Air ball! Air ball!'
      }
    ];
  }

  public getPosts(): Post[] {
    return this.posts;
  }

  public createPost(author: string, title: string, content: string): void {
    const post: Post = new Post();
    post.author = author;
    post.title = title;
    post.content = content;
    this.posts.push(post);
  }
}
