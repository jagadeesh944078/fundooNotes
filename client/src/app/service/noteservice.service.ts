import { Injectable } from '@angular/core';
import { HttpService } from '../service/http/http.service'

@Injectable({
  providedIn: 'root'
})
export class NoteserviceService {

  constructor(private http:HttpService) { }
  getNote(){
    
    return  this.http.getHttp('notes/getNotesList')
   }
   updatenote(data){
    return this.http.encodedPostForm('notes/updateNotes',data)
     
   }
   deleteNotes(data){
    return this.http.postJSON('notes/deleteForeverNotes',data)

   }
   deleteNote(data){
    return this.http.postJSON('notes/trashNotes',data)

   }
   updateColor(data){
    return this.http.postJSON('notes/changesColorNotes',data)
   }
   archive(data){
     return this.http.postJSON('notes/archiveNotes',data)
   }
   getTrashNotes(){
     return this.http.getHttp('notes/getTrashNotesList')
   }
   getArchiveNote(){
     return this.http.getHttp('notes/getArchiveNotesList')
   }
   addLabel(data){
    return this.http.postJSON('/noteLabels',data)
   }
   getLabel(){
     return this.http.getHttp('noteLabels/getNoteLabelList')
   }
}
