import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './components/notes/notes.component';
import { NotesEditComponent } from './components/notes-edit/notes-edit.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NotesEditComponent,
    NotesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
