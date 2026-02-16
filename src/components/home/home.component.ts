import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { ToasterService } from '../../services/toaster.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AnimateOnScrollDirective]
})
export class HomeComponent {
  private readonly viewportScroller = inject(ViewportScroller);
  private readonly toasterService = inject(ToasterService);

  profileImageUrl = 'https://lh3.googleusercontent.com/d/1bmmDd10UyXJG7M9wBVZJMDokGnM_rLBw';
  imageLoadingStatus = signal<'loading' | 'loaded' | 'error'>('loading');
  resumeUrl = 'https://drive.google.com/uc?export=download&id=1B3PQTnesk5InToEZYlQB9xZ3p3A_jA-E';
  resumeFilename = 'Vaman_Patel_Resume.pdf';
  downloadStatus = signal<'idle' | 'downloading'>('idle');

  socials = [
    { name: 'GitHub', url: 'https://github.com/VamanPatel', iconClass: 'fa-brands fa-github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/vamanpatel/', iconClass: 'fa-brands fa-linkedin' },
  ];

  stats = [
    { value: '4.6+', label: 'Years Experience' },
    { value: '10+', label: 'Projects Done' },
    { value: '3', label: 'Domains Worked' },
  ]
  
  scrollToContact() {
    this.viewportScroller.scrollToAnchor('contact');
  }

  downloadResume(): void {
    if (this.downloadStatus() === 'downloading') {
      return;
    }

    this.downloadStatus.set('downloading');

    // Create a link and click it to trigger the download.
    // This avoids CORS issues with fetch() on external URLs like Google Drive.
    const link = document.createElement('a');
    link.href = this.resumeUrl;
    link.download = this.resumeFilename;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Provide user feedback. Since we can't track download progress from an external source,
    // we simulate a short processing time and then show a confirmation toast.
    setTimeout(() => {
      this.downloadStatus.set('idle');
      this.toasterService.show('Your resume download has started!');
    }, 1500); // A 1.5-second delay feels like the system is working.
  }

  onImageLoad(): void {
    this.imageLoadingStatus.set('loaded');
  }

  onImageError(): void {
    this.imageLoadingStatus.set('error');
    console.error('Failed to load profile image from Google Drive.');
  }
}