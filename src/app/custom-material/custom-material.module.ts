import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatToolbarModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: []
})
export class CustomMaterialModule { }
