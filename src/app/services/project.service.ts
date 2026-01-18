import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project, ProjectAction } from '../pages/projects/models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private readonly projects: Project[] = [
    {
      id: '1',
      title: 'Ortopedia Carmen Website',
      description: 'Ortopedia Carmen Website is a responsive web application developed with Angular and TypeScript, focused on clean design and usability.',
      coverImageUrl: 'covers/ortopedia-carmen-cover.png',
      coverAlt: 'Screenshot of Ortopedia Carmen Website',
      category: 'web-apps',
      categoryLabel: 'Web Apps',
      tech: [{ icon: 'web', title: 'Angular' }],
      primaryAction: {
        type: 'live',
        label: 'Visit Site',
        icon: 'launch',
        url: 'https://ortopedia-carmen.vercel.app',
      },
      secondaryAction: {
        type: 'repo',
        label: 'View Code',
        icon: 'code',
        url: 'https://github.com/DiegoPama01/OrtopediaCarmen',
      },
    },
  ];

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getProjectById(id: string): Observable<Project | undefined> {
    return of(this.projects.find((p) => p.id === id));
  }
}
