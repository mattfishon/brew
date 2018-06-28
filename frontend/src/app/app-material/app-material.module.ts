import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';


import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';

import {
  MatToolbarModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatTableModule  
} from '@angular/material';


@NgModule({
  imports: [CommonModule],
  exports: [
    CdkTableModule,
    CdkTreeModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatExpansionModule,
    MatTableModule
  ]
})
export class AppMaterialModule {}