import { Routes } from '@angular/router';
import { Shell } from './layout/shell/shell';
import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  {
    path: '',
    component: Shell,
    children: [
      { path: '', component: Home, pathMatch: 'full' },
      { path: 'projects', component: Projects },
      { path: 'about', component: About },
      { path: 'contact', component: Contact },

      { path: '**', redirectTo: '' },
    ],
  },
];