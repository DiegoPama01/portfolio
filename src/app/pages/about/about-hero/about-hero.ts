import { Component, Input } from '@angular/core';

interface HeroBadge {
  icon: string;
  label: string;
}

@Component({
  selector: 'app-about-hero',
  standalone: true,
  templateUrl: './about-hero.html',
})
export class AboutHero {
  @Input({ required: true }) kicker!: string;
}
