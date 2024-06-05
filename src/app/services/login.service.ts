import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  private heroesUrl = 'api/heroes';  // URL to web api

  // getFeedbackById(feedbackId: number): Observable<Feedback> {
  //   const url = `${environment.baseUrl}/api/feedback/` + feedbackId;
  //   this.userResponse = JSON.parse(localStorage.getItem('currentUser'));
  //   const token = 'Bearer ' + this.userResponse.token;
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type':  'application/json',
  //       Authorization: token
  //     })
  //   };

  //   return this.http.get<Feedback>(url, httpOptions);
  // }

  // getFeedbackById(feedbackId: number): Observable<Feedback> {
  //   const url = `${environment.baseUrl}/api/feedback/` + feedbackId;
  //   this.userResponse = JSON.parse(localStorage.getItem('currentUser'));
  //   const token = 'Bearer ' + this.userResponse.token;
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type':  'application/json',
  //       Authorization: token
  //     })
  //   };

  //   return this.http.get<Feedback>(url, httpOptions);
  // }

  // saveFeedback(feedback: Feedback): Observable<Feedback> {
  //   this.userResponse = JSON.parse(localStorage.getItem('currentUser'));
  //   const token = 'Bearer ' + this.userResponse.token;
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type':  'application/json',
  //       Authorization: token
  //     })
  //   };
  //   const url = `${environment.baseUrl}/api/feedback/register/` + this.userResponse.user.id;

  //   return this.http.post<Feedback>(url, feedback, httpOptions);
  // }

  // updateFeedbackById(feedbackId: string, feedback: Feedback): Observable<Feedback> {
  //   this.userResponse = JSON.parse(localStorage.getItem('currentUser'));
  //   const token = 'Bearer ' + this.userResponse.token;
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type':  'application/json',
  //       Authorization: token
  //     })
  //   };
  //   const url = `${environment.baseUrl}/api/feedback/updateFeedback/` + this.userResponse.user.id + '/' + feedbackId;

  //   return this.http.put<Feedback>(url, feedback, httpOptions);
  // }

  // deleteStockById(feedbackId: string): Observable<Feedback> {
  //   const url = `${environment.baseUrl}/api/feedback/deleteFeedback/` + feedbackId;
  //   this.userResponse = JSON.parse(localStorage.getItem('currentUser'));
  //   const token = 'Bearer ' + this.userResponse.token;
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type':  'application/json',
  //       Authorization: token
  //     })
  //   };

  //   return this.http.delete<Feedback>(url, httpOptions);
  // }}
}
