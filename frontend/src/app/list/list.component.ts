import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
//import { TransitService } from './transit.service';

import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];


  // Error from Rest call (not much to do with on client)  
  error: any;
  
  constructor(private authService: AuthService) {
  


  }

  ngOnInit() {

  }

  ngOnDestroy() {

   }
  
  setColorScheme(name) {

  }  
    
}