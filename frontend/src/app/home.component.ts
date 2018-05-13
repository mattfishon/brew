import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth/auth.service';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent {

  title = 'Demo';
  greeting = {};

  constructor(private authService: AuthService, private app: AppService, private http: HttpClient) {
    http.get('resource').subscribe(data => this.greeting = data);
  }

  authenticated() {
     //return this.authService.isLoggedIn();
     
    var isLoggedInNow = false;

    // Check if the user is authenticated
    this.authService.isLoggedIn.take(1).subscribe(function (data) {
        isLoggedInNow = data;
    });

    if ( isLoggedInNow ) {
        return true;
    } 
    return false;
   
   }

}