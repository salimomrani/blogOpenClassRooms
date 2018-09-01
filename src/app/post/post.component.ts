import {Component, Input, OnInit} from '@angular/core';
import {Post} from 'src/app/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: [ './post.component.css' ]
})
export class PostComponent implements OnInit {

  @Input() post: Post;

  constructor() {
  }

  ngOnInit() {
  }

  loveIt() {
    this.post.loveIts = this.post.loveIts + 1;
  }

  dislikIt() {
    this.post.loveIts = this.post.loveIts - 1;
  }
}
