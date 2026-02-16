import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AnimateOnScrollDirective]
})
export class AboutComponent {
  aboutImageUrl = 'https://lh3.googleusercontent.com/d/1d6l1ROYUdyDEuSKhxUpwF13_nA1k9Ylq';
  imageLoadingStatus = signal<'loading' | 'loaded' | 'error'>('loading');

  onImageLoad(): void {
    this.imageLoadingStatus.set('loaded');
  }

  onImageError(): void {
    this.imageLoadingStatus.set('error');
    console.error('Failed to load about section image.');
  }
}