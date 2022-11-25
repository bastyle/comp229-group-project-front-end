import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './model/post.model';
//import { JwtHelperService } from '@auth0/angular-jwt';

const PROTOCOL = 'http';
const PORT = 3000;


@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  baseUrl: string;
  authToken: string;

  private httpOptions =
  {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };

  //constructor(private http: HttpClient, private jwtService: JwtHelperService)
  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    console.log("this.baseUrl:: "+this.baseUrl);
  }


  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl + 'post');
  }

  savePost(post: Post): Observable<Post>  {
    console.log(JSON.stringify(post));
    return this.http.post<Post>(this.baseUrl + 'post/add', post);
  }

}
