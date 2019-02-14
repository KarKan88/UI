import { Injectable, Component } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
//import { Logger } from './logger';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable()
//const headers = new HttpHeaders().set("X-CustomHttpHeader", "CUSTOM_VALUE");
export class Backend {
    data: object;
    authHeaders : HttpHeaders;
    serverUrl : string;
    constructor(private http: HttpClient) { 

    }
    
   // data : object;
   storeUrl( key:string){
       this.serverUrl = 'http://10.0.1.28:9999/self-service/';
       //this.serverUrl = 'http://10.0.1.66:9999/self-service/';
   };
   getUrl (){
       return this.serverUrl;
   }
    getHeaders() {
        return new HttpHeaders(
            {"X-Auth-Token": "26af7df8-890c-4d6b-9071-1f5a69d63329"});//this.authToken});
    }
   
    getCall (endpoint : string) : Observable<any>{
        return this.http.get(this.getUrl()+endpoint)
        .pipe(catchError(this.handleError('Get')));
    }
   
    postCall ( endPioint:string) : Observable<any> {
        return this.http.post(this.getUrl()+endPioint,undefined)
         .pipe(catchError(this.handleError('Post')));
       }
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          console.error(error);
          return of(result as T);
        };
      }
  }
  