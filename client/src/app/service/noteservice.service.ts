import { Injectable } from '@angular/core';
import { HttpService } from '../service/http/http.service'
import { identifierModuleUrl } from '@angular/compiler';

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
    return this.http.postJSON('notes/'+data.id+'/addLabelToNotes/'+data.labelId+'/add',data)
   }
   addlabel(data){
     return this.http.postJSON('/noteLabels',data)
   }
   getLabel(){
     return this.http.getHttp('noteLabels/getNoteLabelList')
   }
   updateProfile(data){
    return this.http.postJSON('user/uploadProfileImage',data)
   }
   addReminders(data){
     return this.http.postJSON('notes/addUpdateReminderNotes',data)
   }
   getReminder(){
     return this.http.getHttp('notes/getReminderNotesList')
   }
   serchUserList(data){
     return this.http.postJSON('user/searchUserList',data)
   }
   addColl(noteId,data){
     return this.http.postJSON('notes/'+noteId+'/AddcollaboratorsNotes',data)
   }
   removeColl(noteId,userId){
     return this.http.encodedpostForm('notes/'+noteId+'/removeCollaboratorsNotes/'+userId,"")
   }
   uploagImage(data){
     return this.http.postImage('user/uploadProfileImage',data)

   }
   deleteReminder(data){
     return this.http.postJSON('notes/removeReminderNotes',data)
   }
   postUpdateNotelabel(labelid,data){
     return this.http.postJSON('noteLabels/'+labelid+'/updateNoteLabel',data)
   }
   deletelabel(labelid){
     return this.http.encodedpostForm('noteLabels/'+labelid+'/deleteNoteLabel',"")
   }
  postAddLabelnotesRemove(note, label,data) {
   return this.http.postJSON('notes/'+note+'/addLabelToNotes/'+label+'/remove',data)
  }
  getNotesId(noteId){
   return this.http.getHttp('notes/getNotesDetail/'+noteId)
  }
  addquestion(data){
    return this.http.postJSON('questionAndAnswerNotes/addQuestionAndAnswer',data)
  }
  replyQnA(noteId,data){
    return this.http.postJSON('questionAndAnswerNotes/reply/'+noteId,data)
  }
  likeQnA(id,data){
    return this.http.postJSON('questionAndAnswerNotes/like/'+id,data)
  }
  ratingQnA(id,data){
    return this.http.postJSON('questionAndAnswerNotes/rate/'+id,data)
  }
  getServiceOfUser(){
    return this.http.getHttp('/user/service')
}
addtoCart(data){
  return this.http.postJSON("/productcarts/addToCart",data)
}

  getCartDetails(cartId){
    return this.http.getHttp("/productcarts/getCartDetails/"+cartId+"")
}

}
