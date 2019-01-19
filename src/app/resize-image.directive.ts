import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appResizeImage]'
})
export class ResizeImageDirective {

  @Input() height: number;

  @Input() width: number;

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'green';
  }

}
