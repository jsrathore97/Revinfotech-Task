import { Directive, ElementRef, HostListener  } from '@angular/core';

@Directive({
  selector: '[appUppercase]'
})
export class UppercaseDirective {

  constructor(private el:ElementRef) {
    el.nativeElement.style.textTransform  = "uppercase";
  }

}
