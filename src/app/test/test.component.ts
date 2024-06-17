import { Type } from '@angular/compiler';
import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TestInstance } from '../common/service/service-di.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})


export class TestComponent implements OnInit {
  form: FormGroup;
  constructor(private fb : FormBuilder,
    private testService : TestInstance
  ){
console.log('bbb',this.testService.count);



    this.form = this.fb.group({
      formsArray: this.fb.array([])
    })
  }
  a = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
    address: '123 Main St',
    phone: '555-1234'
  };
  listItem = ['./assets/img_bg/DSCF4879.JPG','./assets/img_bg/DSCF4880.JPG','./assets/img_bg/DSCF4883.JPG'];
  selectIndex = 0;
  next(i: number){
    if (i <this.listItem.length -1) {
      this.selectIndex = i +1
      
    }
  }
  prev(i: number){
    if(this.selectIndex > 0)
      this.selectIndex = i -1;
    return;
  }


  get formsArray(): FormArray {
    return this.form.get('formsArray') as FormArray;
  }
  addForm() {
    const newForm = this.fb.group({
      field1: ['', Validators.required],
      field2: ['', Validators.required]
    });
    this.formsArray.push(newForm);
  }

  removeForm(index: number) {
    this.formsArray.removeAt(index);
  }

  onSubmit() {
    console.log(this.form.value);
  }
  onSwipeLeft() {
    console.log('Vuốt sang trái');
  }

  onSwipeRight() {
    console.log('Vuốt sang phải');
  }

  ngOnInit() {
 
  }


}
