import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


import { pluck, map } from 'rxjs/operators';
import { Response } from '@angular/http';
import { Observable, pipe } from 'rxjs';
import { AuthenticationService } from './authentication/authentication.service';
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public hide = true;
  public setUser;
  public setPassword;
  public response$;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  constructor(public http: HttpClient, public authentication: AuthenticationService) {
  }


  matcher = new MyErrorStateMatcher();
  fetchUser() {
    this.http.get<any>(environment.userEnpoint).subscribe(response => {
      console.log(response);
    });
  }

  addUser(valor) {
    if (valor) {
      this.http.post(environment.userEnpoint, {name: valor}).subscribe();
    }
  }

  onLoginUser(user, password) {
    this.authentication.callServiceCallYesOrNot().subscribe(
      response => {
        response.forEach(element => {
          if (element.userName === user && element.password === password) {
            this.response$ = element;
          }
        });
        console.log(this.response$);
      });
  }
}
