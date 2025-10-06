import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppHighlight]'
})
export class AppHighlight {

  @Input('appAppHighlight') highlightColor: string = 'lightyellow';
 
 
  constructor(private el: ElementRef, private renderer: Renderer2) {}
 
  @HostListener('mouseenter') onMouseEnter() {
    this.setHighlight(this.highlightColor);
  }
 
  @HostListener('mouseleave') onMouseLeave() {
    this.setHighlight(null);
  }
 
  private setHighlight(color: string | null) {
    if (color) {
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
      this.renderer.setStyle(this.el.nativeElement, 'transition', '0.3s');
      this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
      this.renderer.setStyle(this.el.nativeElement, 'boxShadow', '0 4px 8px rgba(0,0,0,0.2)');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor');
      this.renderer.removeStyle(this.el.nativeElement, 'boxShadow');
    }
  }

}
