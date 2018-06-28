import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
//import { TransitService } from './transit.service';

import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  panelOpenState: boolean = true;


  // Error from Rest call (not much to do with on client)  
  error: any;
  
    hops = [
    {
      name: 'Saaz',
      ppg:  32
    },
    {
      name: 'Magnum',
      ppg:  35
    }
  ];
  
  
    selectedValue: string;

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  
  definedColumns = ['name', 'weight', 'symbol', 'position'];
  columnsToDisplay = this.definedColumns.slice();
  data: PeriodicElement[] = ELEMENT_DATA;

  newRowData : PeriodicElement = {position: 11, name: 'New', weight: 1.0079, symbol: 'N'};

  dataSource : UserDataSource;
  _dataSubject = new BehaviorSubject<PeriodicElement[]>([]);


  addColumn() {
    const randomColumn = Math.floor(Math.random() * this.definedColumns.length);
    this.columnsToDisplay.push(this.definedColumns[randomColumn]);
  }

  addRow() {
    this.data.push(this.newRowData);
    this.updateValues(this.data);
  }

  updateValues(myArray: any[]) {
    this._dataSubject.next(myArray)
  }
  
  constructor(private authService: AuthService) {
       this.updateValues(this.data);
       this.dataSource = new UserDataSource(this._dataSubject)
  }

  ngOnInit() {

  }

  ngOnDestroy() {

   }
  
  setColorScheme(name) {

  }  
    
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
];

export class UserDataSource extends DataSource<PeriodicElement> {
  constructor(private _data: BehaviorSubject<PeriodicElement[]>) {
    super();
  }
  connect() : Observable<PeriodicElement[]>  {
     return this._data.asObservable()
  }
  disconnect() {}
}