import { AnimationBuilder, AnimationPlayer, animate, animateChild, style } from '@angular/animations';
import { Directive, ElementRef, EventEmitter, HostListener, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSwipeTouch]',
  exportAs : 'appSwipeTouch',
})
export class SwipeTouchDirective {

  @Output() swipeLeft = new EventEmitter<void>();
  @Output() swipeRight = new EventEmitter<void>();

  private startX: number = 0;
  private startY: number = 0;
  private isSwiping: boolean = false;
  private player: AnimationPlayer | undefined;
  constructor(private el: ElementRef ,private renderer: Renderer2,private builder: AnimationBuilder) {}

  @HostListener('touchstart', ['$event'])
  @HostListener('mousedown', ['$event'])
  onTouchStart(event: TouchEvent | MouseEvent) {
    this.isSwiping = true;
    if (event instanceof TouchEvent) {
      this.startX = event.touches[0].clientX;
      this.startY = event.touches[0].clientY;
    } else if (event instanceof MouseEvent) {
      this.startX = event.clientX;
      this.startY = event.clientY;
    }
  }

  @HostListener('touchmove', ['$event'])
  @HostListener('mousemove', ['$event'])
  onTouchMove(event: TouchEvent | MouseEvent) {
    if (!this.isSwiping) return;

    let currentX = 0;
    let currentY = 0;
    if (event instanceof TouchEvent) {
      currentX = event.touches[0].clientX;
      currentY = event.touches[0].clientY;
    } else if (event instanceof MouseEvent) {
      currentX = event.clientX;
      currentY = event.clientY;
    }

    const deltaX = currentX - this.startX;
    const deltaY = currentY - this.startY;

    // Check for horizontal swipe
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 30) {
      this.isSwiping = false; // Prevent further handling of this swipe
      if (deltaX > 0) {
        this.swipeRight.emit();
        // this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'black');
       const a = this.el.nativeElement;
       const item = a.getElementsByClassName('item');
       a.append(item[0]);
       this.renderer.addClass(item[0], 'move-animation');

       // Remove class after animation is done to reset the state
       setTimeout(() => {
         this.renderer.removeClass(item[0], 'move-animation');
       }, 500);
      } else {
        this.swipeLeft.emit();
        const a = this.el.nativeElement;
       const item = a.getElementsByClassName('item');
       a.prepend(item[item.length - 1]);
        this.renderer.addClass(item[item.length - 1], 'move-animationv2');
        setTimeout(() => {
          this.renderer.removeClass(item[item.length - 1], 'move-animationv2');
        }, 500);
       

      }
    }
  }

  @HostListener('touchend', ['$event'])
  @HostListener('mouseup', ['$event'])
  onTouchEnd(event: TouchEvent | MouseEvent) {
    this.isSwiping = false;
  }

}
