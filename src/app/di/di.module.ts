import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiComponent } from './di.component';
import { DiChildGroupComponent } from './di-child-group/di-child-group.component';
import { DiChildItemComponent } from './di-child-item/di-child-item.component';
import { DiRoutingModule } from './di.component.routing';



@NgModule({
  declarations: [
    DiComponent,
    DiChildGroupComponent,
    DiChildItemComponent
  ],
  imports: [
    CommonModule,
    DiRoutingModule
  ],
})
export class DiModule { }
