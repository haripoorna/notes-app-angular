import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  date: any;
  constructor() { }

  ngOnInit() {
    let date: any = new Date();
    console.log(date.get);
  }

}
