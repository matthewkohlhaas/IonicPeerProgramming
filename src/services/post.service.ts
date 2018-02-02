import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../model/post';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) {}

  public getPosts(): Observable<Object> {
    return this.http.get<Post[]>('https://ionicpeerprogramming.firebaseio.com/posts.json');
  }

  public createPost(author: string, title: string, content: string): Observable<any> {
    const post: Post = new Post();
    post.author = author;
    post.title = title;
    post.content = content;
    return this.http.post<any>('https://ionicpeerprogramming.firebaseio.com/posts.json', post);
  }
}
