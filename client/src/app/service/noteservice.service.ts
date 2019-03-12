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
   deleteNote(data){
    return this.http.postJSON('notes/deleteForeverNotes',data)

   }
   updateColor(data){
    return this.http.postJSON('notes/changesColorNotes',data)
   }
   archive(data){
     return this.http.postJSON('api/notes/archiveNotes',data)
   }
}
