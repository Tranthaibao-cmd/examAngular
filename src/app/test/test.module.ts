import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { CheckValueDirective } from '../common/directive/check-value.directive';
import { SwipeTouchDirective } from '../common/directive/swipe-touch.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { HammerModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    TestComponent,
    CheckValueDirective,
    SwipeTouchDirective
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    DragDropModule,
    ReactiveFormsModule,
  ]
})
export class TestModule { }
