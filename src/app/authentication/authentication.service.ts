import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck, map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {
  }

  callServiceCallYesOrNot(): Observable <any> {
    return this.http.get<any>(environment.userEnpoint).pipe(
      map(data => data)
    );
  }
}
