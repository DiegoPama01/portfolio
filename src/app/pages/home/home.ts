import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { TechStack } from './tech-stack/tech-stack';
import { Cta } from './cta/cta';

@Component({
  selector: 'app-home',
  imports: [Hero, TechStack, Cta],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomePage {

}
