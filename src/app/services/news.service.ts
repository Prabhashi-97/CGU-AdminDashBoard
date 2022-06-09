import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  baseUrl :string='http://localhost:3000/';

  constructor(private http: HttpClient) { }


  listNews(){
    return this.http.get(this.baseUrl + 'news/');
  }

  viewNews(id : String){
    return this.http.get(this.baseUrl + 'news/'+ id );
  }

  addNews(newsObj : any){
    return this.http.post(this.baseUrl +'news/', newsObj );
  }

  deleteNews(id : any){
    return this.http.delete(this.baseUrl+ 'news/'+ id );
  }

  UpdateNews(id:any, newsObj :any){
    return this.http.put(this.baseUrl+ 'news/' + id, newsObj );
  }

  // getUndergrads(id:any){
  //   return this.http.get(this.baseUrl + 'registerEvent/'+ id );
  // }
}
