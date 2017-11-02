import { Directive ,ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlightDir]'
})
export class HighlightDirDirective {

  constructor(public el: ElementRef) { 
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }
 
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
 
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
