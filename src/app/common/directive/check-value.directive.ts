import { Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCheckValue]'
})
export class CheckValueDirective implements OnInit{
  @Input() appCheckValue: string | undefined;
  a = {
    value : '1',
    accc : 'aa'
  }
  constructor() { 

    const xed = "value";
this.a[xed]='dsad';
// this.a.xed= 'asdahjads'
    
  }
  ngOnInit(): void {
    console.log(this.appCheckValue);
  }
test(){
  return {
    value : 1,
    label : 'aa'
  }
}

}
