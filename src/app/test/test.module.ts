import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    DragDropModule
  ]
})
export class TestModule { }
