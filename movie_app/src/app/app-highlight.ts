import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppHighlight]'
})
export class AppHighlight {

  @Input('appAppHighlight') highlightColor: string = 'lightyellow';

  private highlightedStyle = 'highlighted';

  /**
   * 
   * @param el - Reference to DOM element
   * @param renderer - Renderer2 for safely modifying DOM
   */

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  /**
   * HostListener for mouseenter event
   * @summary - Adds highlight style and background color to element
   */

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.addClass(this.el.nativeElement, this.highlightedStyle);
    if (this.highlightColor && this.highlightColor !== 'lightyellow') {
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.highlightColor)
    }
  }

  /**
   * HostListener for mouseleave event
   * @summary - Removes background color but keeps highlight class
   */

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.addClass(this.el.nativeElement, this.highlightedStyle);
    if (this.highlightColor && this.highlightColor !== 'lightyellow') {
      this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor')
    }
  }
}
