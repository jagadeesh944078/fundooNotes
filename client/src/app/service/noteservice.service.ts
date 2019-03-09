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
   
}
