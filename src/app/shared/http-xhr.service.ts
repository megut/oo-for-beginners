import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpXhrService {

  constructor(
    private http: HttpClient,
  ) {
  }

  getHeaders(
    authorization?: string,
  ): HttpHeaders {
    const headers: HttpHeaders = new HttpHeaders().append('X-Requested-With', 'XMLHttpRequest');

    if (authorization) {
      return headers.append('Authorization', authorization);
    }

    return headers;
  }

  get<T>(
    url: string,
    authorization?: string,
  ): Observable<T> {
    return this.http
      .get<T>(url, {
        headers: this.getHeaders(authorization),
      });
  }

  post<T>(
    url: string,
    body: any = {},
  ): Observable<T> {
    return this.http.post<T>(url, body, {headers: this.getHeaders()});
  }

  put<T>(
    url: string,
    body: any = {},
  ): Observable<T> {
    return this.http.put<T>(url, body, {headers: this.getHeaders()});
  }

  delete<T>(
    url: string,
  ): Observable<T> {
    return this.http.delete<T>(url, {headers: this.getHeaders()});
  }

}
