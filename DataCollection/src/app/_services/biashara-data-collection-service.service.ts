import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BiasharaDataCollectionForm } from '../_models/biasharaModel';
import { Observable } from 'rxjs';



// connect to backend api
// const apiUrl = 'http://localhost:8000/biashara/';

@Injectable({
  providedIn: 'root'
})
export class BiasharaDataCollectionServiceService {

  // constructor(private http: HttpClient) { }
  // getResponse(response: BiasharaDataCollectionForm): Observable<BiasharaDataCollectionForm>{
  //      return this.http.post<BiasharaDataCollectionForm>(apiUrl, response);
  // }
}
