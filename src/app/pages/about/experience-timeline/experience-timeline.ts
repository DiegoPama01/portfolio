import { Component, Input } from '@angular/core';

interface TimelineItem {
  role: string;
  period: string;
  description: string;
  active?: boolean;
}

@Component({
  selector: 'app-experience-timeline',
  standalone: true,
  templateUrl: './experience-timeline.html',
})
export class ExperienceTimeline {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) icon!: string;
  @Input({ required: true }) items: TimelineItem[] = [];
}
