import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appScrollTracker]'
})
export class ScrollTrackerDirective {

  @Output() scrollEndReached = new EventEmitter<void>();

  constructor(private el: ElementRef) {}

  @HostListener('scroll', ['$event'])
  onScroll(event: any): void {
    const element = this.el.nativeElement;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      this.scrollEndReached.emit();
    }
  }

}
