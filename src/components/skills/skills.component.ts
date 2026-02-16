import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, AnimateOnScrollDirective]
})
export class SkillsComponent {
  private dataService = inject(PortfolioDataService);
  skillsByCategory = this.dataService.skills;
  
  // Method to get keys for the signal object
  get categories(): string[] {
    return Object.keys(this.skillsByCategory());
  }
}