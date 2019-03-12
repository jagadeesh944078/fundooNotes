import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public httpOptions;
  
  constructor(private http: HttpClient) { }
  link = environment.baseUrl
  postRequest(url, user) {
    let headers = new HttpHeaders({
      'Accept': 'application/json',
      // 'Authorization':localStorage.getItem('token')
    });
    console.log("service");
    return this.http.post(this.link + url, user, { headers: headers });
  }
  post(url, notes ) {
    let headers = new HttpHeaders({
      'Accept': 'application/json',
      
    });
    console.log("service");
    return this.http.post(this.link + url, notes, { headers: headers });
  }
  getFormUrlEncoded(toConvert) {
    const formBody = [];
    for (const property in toConvert) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(toConvert[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    return formBody.join('&');
  }
 
  

 
  PostUrlEncoded(url, notes) {
    console.log('in note   ',url,'   ',notes);
    // console.log(localStorage.getItem('admintoken'));
    
    
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('token')
      })
    };
    
    
    return this.http.post(this.link+url,this.getFormUrlEncoded(notes), this.httpOptions)
  }

GetUrlEncoded(url, notes) {
  console.log('in note   ',url);
  // console.log(localStorage.getItem('admintoken'));
  
  
  this.httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': localStorage.getItem('admintoken')
    })
  };
  
  return this.http.get(this.link+url,this.httpOptions)
}
getHttp(url){
 
  const httpTocken={
  headers:new HttpHeaders({
  'content-Type':'application/json',
  'Authorization':localStorage.getItem('token')
  })
  }
  return this.http.get(this.link+url,httpTocken);
  }

  postpassword(url) {
    
     
    var httpAuthOptions1 = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        
      })
  
    };
    return this.http.post(this.link+url, this.getFormUrlEncoded(url), httpAuthOptions1);
  
  }
  encodedPostForm(url: any, data: any) {
    url = this.link + url;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('token')
      })
    }
    return this.http.post(url, this.getFormUrlEncoded(data), httpOptions);
  }
  postJSON(url: string, body: any): any {
    url=this.link + url;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
    return this.http.post(url, body, httpOptions)
  }
}

