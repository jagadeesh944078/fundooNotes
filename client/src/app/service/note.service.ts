import { Injectable } from '@angular/core';
import { NoteModel } from '../models/note.model';
import { Observable } from 'rxjs';

import { HttpHeaders ,HttpClient} from '@angular/common/http';
const httpOptions = {

  headers: new HttpHeaders({'Content-Type': 'application/json' ,
  'token':localStorage.getItem('jwtToken')}
  )};

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  note : NoteModel=new NoteModel();

  constructor(private http: HttpClient) { }
  private userUrl = 'http://localhost:4200/dashboard';

  public createNote(note: NoteModel) :any {
    console.log(this.userUrl+'addNote');
    console.log("local ",localStorage.getItem('jwtToken'))
    console.log("header ",httpOptions.headers.get('token'));

    httpOptions.headers.set('token',localStorage.getItem('jwtToken'));
    console.log("after ",httpOptions.headers.get('token'));

    return this.http.post<NoteModel>(this.userUrl+'addNote',note,httpOptions);
   
  }
 
  public getAllNotes() : Observable<NoteModel[]> | any
  {
    console.log("local ",localStorage.getItem('jwtToken'))
    var httpOptions2 = {
      headers : new HttpHeaders({'token' : localStorage.getItem('jwtToken')
    
      })
    };


      return this.http.get<NoteModel[]>(this.userUrl+"note",httpOptions2);   
        
     }
     public archiveNote(note : NoteModel) : any{
      var httpOptions = {

        headers: new HttpHeaders({'Content-Type': 'application/json' ,
        'token':localStorage.getItem('jwtToken')}
        )};
      console.log(this.userUrl+"archiveNote")
       return this.http.post(this.userUrl+"archiveNote",note,httpOptions)
     }
     


     public getArchiveNotes() : Observable<NoteModel[]> | any
     {
       console.log("local ",localStorage.getItem('jwtToken'))
       var httpOptions2 = {
         headers : new HttpHeaders({'token' : localStorage.getItem('jwtToken')
       
         })
       };
       console.log(this.userUrl+'getArchiveNote');
      
       console.log("header ",httpOptions2.headers.get('token'));
        console.log('get url',this.userUrl+'getArchiveNote');
   
         return this.http.get<NoteModel[]>(this.userUrl+"getArchiveNote",httpOptions2);     
        }


        public deleteNote(note : NoteModel) : any{
          var httpOptions = {

            headers: new HttpHeaders({'Content-Type': 'application/json' ,
            'token':localStorage.getItem('jwtToken')}
            )};
            
           return this.http.delete<NoteModel>(this.userUrl+"note/"+note.id,httpOptions)
        }


        public updateNote(Note : NoteModel) : any 
        {
          var httpOptions = {

            headers: new HttpHeaders({'Content-Type': 'application/json' ,
           'token':localStorage.getItem('jwtToken')}
          )};

           return this.http.put<NoteModel>(this.userUrl+'note',Note,httpOptions);
        }

        public updateArchiveNote(note : NoteModel) : any 
         {
           console.log('hihihi');
           
            var httpOptions = {

               headers: new HttpHeaders({'Content-Type': 'application/json' ,
              'token':localStorage.getItem('jwtToken')}
             )};
              console.log(this.userUrl+'note/archive/'+note.id);
              
              return this.http.put<NoteModel>(this.userUrl+'note/archive/'+note.id,null,httpOptions);

          }  
          
          public updateTrashNote(note : NoteModel) : any{
            var httpOptions = {

              headers: new HttpHeaders({'Content-Type': 'application/json' ,
             'token':localStorage.getItem('jwtToken')}
            )};
            return this.http.put<NoteModel>(this.userUrl+'note/trash/'+note.id,null,httpOptions);

          }
        
          public updatePin(note : NoteModel) : any{
            var httpOptions = {

              headers: new HttpHeaders({'Content-Type': 'application/json' ,
             'token':localStorage.getItem('jwtToken')}
            )};
            return this.http.put<NoteModel>(this.userUrl+'note/pin/'+note.id,null,httpOptions);

          }


          public getTrashNotes() : Observable<NoteModel> | any{
            console.log("local ",localStorage.getItem('jwtToken'))
            var httpOptions2 = {
              headers : new HttpHeaders({'token' : localStorage.getItem('jwtToken')
            
              })
            };
            console.log(this.userUrl+'getTrashNote');
           
            console.log("header ",httpOptions2.headers.get('token'));
             console.log('get url',this.userUrl+'getTrashNote');
        
              return this.http.get<NoteModel[]>(this.userUrl+"getTrashNote",httpOptions2);     
          }  
}



