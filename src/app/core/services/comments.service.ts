import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComments } from '../interfaces/comments-interface';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  baseUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }
  public getComments(): Observable<IComments[]>{
    return this.http.get<IComments[]>(`${this.baseUrl}/comments`)
  }
  public postComment(text: string, parentId: string | null): Observable<IComments>{
    return this.http.post<IComments>(`${this.baseUrl}/comments`, {
      body: text,
      parentId,
      createdAt: new Date().toISOString(),
      userId: '1',
      username: 'luka'
    })
  } 
  public deleteComment(id: any) {
    return this.http.delete(`${this.baseUrl}/comments/${id}`)
  }
  public getId(id?: any) {
    return this.http.get(`${this.baseUrl}/comments/${id}`)
  }
  public updateComments(id: any, comment: any) {
    return this.http.put(`${this.baseUrl}/comments/${id}`, comment)
  }
}
