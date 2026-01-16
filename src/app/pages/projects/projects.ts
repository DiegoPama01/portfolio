import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProjectService } from '../../services/project.service';
import { ProjectGrid } from './components/project-grid/project-grid';
import { FilterChip, FilterChips } from './components/filter-chips/filter-chips';
import { ProjectCategory } from './models/project.model';

type FilterId = 'all' | ProjectCategory;

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [FilterChips, ProjectGrid],
  templateUrl: './projects.html',
})
export class ProjectsPage {
  private readonly projectService = inject(ProjectService);

  chips: FilterChip[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'web-apps', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'open-source', label: 'Open Source' },
    { id: 'ui-ux', label: 'UI/UX Design' },
  ];

  activeFilterId = signal<FilterId>('all');

  projects = toSignal(this.projectService.getProjects(), { initialValue: [] });

  filteredProjects = computed(() => {
    const filter = this.activeFilterId();
    const list = this.projects();
    if (filter === 'all') return list;
    return list.filter((p) => p.category === filter);
  });

  onFilterChange(next: string) {
    this.activeFilterId.set(next as FilterId);
  }
}
