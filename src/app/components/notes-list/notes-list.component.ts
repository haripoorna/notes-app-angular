import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../../entities/notes';
@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {
 @Input() noteData : Note[]
  constructor() { }

  ngOnInit() {
  }

}
