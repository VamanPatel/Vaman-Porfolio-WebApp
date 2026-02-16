import { Directive, ElementRef, AfterViewInit, Input, inject, Renderer2, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appAnimateOnScroll]',
  standalone: true,
})
export class AnimateOnScrollDirective implements AfterViewInit, OnDestroy {
  // Use a private property and a setter to handle the case where the input is an empty string.
  private _animationClass = 'animate-fade-in-up';
  
  @Input('appAnimateOnScroll')
  set animationClass(value: string) {
    // If the attribute is present without a value, it comes in as an empty string.
    // In that case, we fall back to the default.
    this._animationClass = value || 'animate-fade-in-up';
  }
  get animationClass(): string {
    return this._animationClass;
  }
  
  @Input() animationDelayClass = ''; // e.g., 'delay-200'

  private observer?: IntersectionObserver;
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);

  ngAfterViewInit(): void {
    const options = {
      threshold: 0.1
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, this.animationClass);
          if (this.animationDelayClass) {
            this.renderer.addClass(this.el.nativeElement, this.animationDelayClass);
          }
          this.observer?.unobserve(this.el.nativeElement);
        }
      });
    }, options);

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
