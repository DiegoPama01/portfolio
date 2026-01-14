import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgFor } from '@angular/common';

type NavLink = { label: string; path: string };

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgFor],
  templateUrl: './navbar.html',
})
export class Navbar {
  links: NavLink[] = [
    { label: 'Projects', path: '/projects' },
    { label: 'About', path: '/about' },
    { label: 'Tech Stack', path: '/tech' }, // si luego decides que sea page
    { label: 'Contact', path: '/contact' },
  ];
}
