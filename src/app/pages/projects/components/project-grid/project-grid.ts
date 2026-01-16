import { Component, Input } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectCard } from '../project-card/project-card';

@Component({
  selector: 'app-project-grid',
  imports: [ProjectCard],
  templateUrl: './project-grid.html',
  styleUrl: './project-grid.scss',
})
export class ProjectGrid {
  @Input({ required: true }) projects: Project[] = [];
}
