import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComment } from '../interfaces/comments-interface';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  baseUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }
  public getComments(): Observable<IComment[]>{
    return this.http.get<IComment[]>(`${this.baseUrl}/comments`)
  }
  public postComment(text: string, parentId: string | null): Observable<IComment>{
    return this.http.post<IComment>(`${this.baseUrl}/comments`, {
      body: text,
      parentId,
      userId: 1,
      username: 'luka'
    })
  } 
  public deleteComment(id: number) {
    return this.http.delete(`${this.baseUrl}/comments/${id}`)
  }
  public getId(id?: any) {
    return this.http.get(`${this.baseUrl}/comments/${id}`)
  }
  public updateComments(id: any, comment: any) {
    return this.http.put(`${this.baseUrl}/comments/${id}`, comment)
  }
}
