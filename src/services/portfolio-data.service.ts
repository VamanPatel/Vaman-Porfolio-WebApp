
import { Injectable, signal } from '@angular/core';
import { Experience, Project, Skill } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root',
})
export class PortfolioDataService {
  readonly skills = signal<Record<string, Skill[]>>({
    'Frontend & Frameworks': [
      { name: 'Angular (9-latest)', level: 95 },
      { name: 'TypeScript', level: 95 },
      { name: 'RxJS & Signals', level: 90 },
      { name: 'HTML5 & CSS3', level: 90 },
      { name: 'SCSS', level: 85 },
      { name: 'Tailwind CSS', level: 80 },
    ],
    'Backend & APIs': [
      { name: 'Node.js (Basic)', level: 60 },
      { name: 'REST APIs', level: 85 },
    ],
    'Tools & Other': [
      { name: 'Git & GitHub', level: 85 },
      { name: 'JIRA', level: 80 },
      { name: 'Angular SSR', level: 70 },
    ],
    'Cloud (Learning)': [
      { name: 'AWS (In Progress)', level: 40 },
    ],
  });

  readonly experiences = signal<Experience[]>([
    {
      company: 'Infosys',
      duration: 'Nov 2021 - Present (2+ years)',
      role: 'Senior Systems Engineer',
      domain: 'Banking & Telecom',
      description: [
        'Developed and maintained large-scale enterprise applications for clients like Truist Bank and Charter Communications.',
        'Built reusable, high-performance components and optimized application architecture.',
        'Collaborated with cross-functional teams, actively participated in sprint planning, and assisted teammates to ensure timely delivery.',
        'Implemented complex features using modern Angular, TypeScript, and RxJS.',
      ],
      technologies: ['Angular 12-16+', 'TypeScript', 'RxJS', 'SCSS', 'REST APIs'],
    },
    {
      company: 'MSP IT Concepts',
      duration: 'Jul 2020 - Oct 2021 (1.4 years)',
      role: 'Software Engineer',
      domain: 'Healthcare',
      description: [
        'Engineered frontend solutions for healthcare clients such as Paragon Healthcare and Agility Healthcare.',
        'Developed applications from scratch, taking ownership of the entire frontend development lifecycle.',
        'Focused on creating intuitive and accessible user interfaces, ensuring a seamless user experience.',
        'Contributed to code reviews and maintained high code quality standards.',
      ],
      technologies: ['Angular 9', 'TypeScript', 'HTML5', 'CSS3', 'Bootstrap'],
    },
  ]);

  readonly projects = signal<Project[]>([
    {
      title: 'Enterprise Banking Portal',
      description: 'A comprehensive portal for a major US bank, featuring account management, transaction history, and secure messaging. Built with performance and security as top priorities.',
      technologies: ['Angular 14', 'TypeScript', 'RxJS', 'SCSS', 'Micro-frontends'],
      githubUrl: '#',
    },
    {
      title: 'Healthcare Patient Dashboard',
      description: 'A patient-facing application for a leading healthcare provider, enabling appointment scheduling, medical record access, and communication with doctors.',
      technologies: ['Angular 9', 'Bootstrap', 'REST APIs', 'Chart.js'],
      liveUrl: '#',
    },
    {
      title: 'Telecom Service Management App',
      description: 'An internal tool for Charter Communications to manage customer services, troubleshoot issues, and provision new equipment, improving operational efficiency.',
      technologies: ['Angular 12', 'NgRx', 'Angular Material', 'TypeScript'],
      githubUrl: '#',
    },
    {
      title: 'Personal Portfolio Website',
      description: 'This very website. A modern, fully responsive portfolio built with the latest Angular, zoneless change detection, and Tailwind CSS to showcase my skills and experience.',
      technologies: ['Angular (latest)', 'Signals', 'Tailwind CSS', 'Standalone Components'],
      githubUrl: '#',
    },
  ]);
}
