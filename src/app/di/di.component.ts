import { Component } from '@angular/core';
import { TestInstance } from '../common/service/service-di.component';

@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.scss']
})
export class DiComponent {
  constructor(private testService : TestInstance){

  }
click(){
  this.testService.count++;
  console.log(this.testService.count);
  
}
}
