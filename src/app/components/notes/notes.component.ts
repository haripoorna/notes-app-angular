import { Component, OnInit } from '@angular/core';
import { Note } from '../../entities/notes';
import {NotesList} from './notes-list';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  date: any;
  
  noteList: Note[] = NotesList;
  constructor() { }
  ngOnInit() {
    let date: any = new Date();
    console.log(date.get);
  }

}
