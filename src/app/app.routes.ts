import { Routes } from '@angular/router';
import { Shell } from './layout/shell/shell';
import { HomePage } from './pages/home/home';
import { ProjectsPage } from './pages/projects/projects';
import { AboutPage } from './pages/about/about';
import { ContactPage } from './pages/contact/contact';

export const routes: Routes = [
  {
    path: '',
    component: Shell,
    children: [
      { path: '', component: HomePage, pathMatch: 'full' },
      { path: 'projects', component: ProjectsPage },
      { path: 'about', component: AboutPage },
      { path: 'contact', component: ContactPage },

      { path: '**', redirectTo: '' },
    ],
  },
];