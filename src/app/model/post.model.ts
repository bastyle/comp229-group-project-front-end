import { Injectable } from '@angular/core';


@Injectable()
export class Post
{
  // tslint:disable-next-line: variable-name
  public _id: Number;
  public publisher: string;
  public content: string;
  public title: string;
  public created: Date;
  public updated: Date;

  constructor() {}

  clear(): void {
    this._id = null;
    this.publisher =null;
    this.content = null;
    this.title  = null;
    this.created = null;
    this.updated = null;
  }
}
