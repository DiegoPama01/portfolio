import { Component } from '@angular/core';
import { AboutHero } from './about-hero/about-hero';
import { TechStackGrid } from './tech-stack-grid/tech-stack-grid';
import { ExperienceTimeline } from './experience-timeline/experience-timeline';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [AboutHero, TechStackGrid, ExperienceTimeline],
  templateUrl: './about.html',
})
export class AboutPage {
  techStack = [
    { icon: 'icons/angular.svg', label: 'Angular' },
    { icon: 'icons/typescript.svg', label: 'TypeScript' },
    { icon: 'icons/javascript.svg', label: 'JavaScript' },
    { icon: 'icons/php.svg', label: 'PHP' },
    { icon: 'icons/laravel.svg', label: 'Laravel' },
    { icon: 'icons/mysql.svg', label: 'MySQL' },

    { icon: 'icons/docker.svg', label: 'Docker' },
    { icon: 'icons/git.svg', label: 'Git' },
    { icon: 'icons/gnubash.svg', label: 'CLI / Bash' },
  ];

  timeline = [
    {
      role: 'Assistant Programmer · Comercio Pro, S.L.',
      period: 'Mar 2024 - Present',
      description:
        'Maintained and enhanced a PHP-based ERP system, building new web features with JavaScript, CSS, and HTML. Collaborated on the development of new products using Laravel and Filament, and developed the frontend for new applications with Angular.',
      active: true,
    },
    {
      role: "Master's in Cybersecurity and Privacy · Universitat Oberta de Catalunya",
      period: 'Sep 2024 - Jun 2025',
      description:
        'Focused on cybersecurity fundamentals, privacy, and regulatory compliance in digital environments.',
    },
    {
      role: 'Front-end QA Intern · Open Finance, S.L.',
      period: 'Jan 2023 - May 2023',
      description:
        'Implemented Selenium-based acceptance and unit tests, integrated into Jenkins for continuous automated testing. Developed a custom web scraping application for structured data collection.',
    },
    {
      role: "Bachelor's in Computer Engineering · Universitat Politècnica de València",
      period: 'Sep 2019 - Jun 2023',
      description:
        'Studied software engineering, algorithms, and systems, with a focus on building solid technical foundations.',
    },
  ];
}
