import { Component, Input } from '@angular/core';

interface TechItem {
  icon: string;
  label: string;
}

@Component({
  selector: 'app-tech-stack-grid',
  standalone: true,
  templateUrl: './tech-stack-grid.html',
  styleUrl: './tech-stack-grid.scss',
})
export class TechStackGrid {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) items: TechItem[] = [];
}
