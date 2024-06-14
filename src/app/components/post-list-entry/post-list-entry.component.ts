import { Component, Input } from '@angular/core';
import { Post } from '../../data/post';

@Component({
  selector: 'app-post-list-entry',
  templateUrl: './post-list-entry.component.html',
  styleUrls: ['./post-list-entry.component.css']
})

export class PostListEntryComponent  {
  @Input()
  post!:Post;
}
