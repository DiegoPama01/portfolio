import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../pages/projects/models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  // Fuente de verdad (mock data). Mañana esto puede venir de HttpClient.
  private readonly projects: Project[] = [
    {
      id: 'nova-shop-engine',
      title: 'Nova Shop Engine',
      description:
        'A high-performance e-commerce platform featuring server-side rendering, real-time inventory management, and secure Stripe integration.',
      category: 'web-apps',
      categoryLabel: 'E-commerce',
      coverImageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCl4QyUgJ7FYqU-MFRHlIAzY_3J_0LGuLYFzHwUHfTVAhTkIjXiuIxt91GsAAcUTh3nNoPbpZ3Ivhdalt-UPposWmE4BdZbShFleiPkdR2tJ9lW4b-8zeqnC2j2IGTphZ9LBdwfgC2JTJbVKuy8YRWyV909yladRDNucfmRv7VkENiC_M4kYGhCja-Pe02LRYmz4GJieTzcAx_TddSLzUhHELSmdZxPl6t7x_Df9CfVkwACiqWRs8jHJCTovdor0w6T_2EXAaca8xhD',
      coverAlt: 'Modern e-commerce store dashboard interface',
      tech: [
        { icon: 'data_object', title: 'React' },
        { icon: 'javascript', title: 'Node.js' },
        { icon: 'payments', title: 'Stripe' },
        { icon: 'database', title: 'PostgreSQL' },
      ],
      primaryAction: { type: 'live', label: 'Live Demo', icon: 'rocket_launch', url: '#' },
      secondaryAction: { type: 'repo', label: 'Repo', icon: 'code', url: '#' },
    },
    {
      id: 'cognito-ai-assistant',
      title: 'Cognito AI Assistant',
      description:
        'Next-gen AI dashboard integrated with OpenAI GPT-4, featuring custom model fine-tuning and visual data analysis.',
      category: 'web-apps',
      categoryLabel: 'Artificial Intelligence',
      coverImageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDK7hsjrOKpia3tg4yJcJht1kxCAYPdBem9byHR8G3yZ0qU3TFg_w2UbG6GC-ls4n6wN-pi-hY262jF7-sU94ViY-jP3i3tggtGc_a81EE29gdae2jy_7MxuxvmNJMBiBxq1O2ft8wSzw2_TJ7y6TCkBXSD0wl8eZhht0EcX_WpNx7Z0EWXcaMuWDRwxffLjCEdE1njds_la7U2gtlkt4ObcIgttV7MddSpmTdMIc2ji1K6yUVhENH7wnuta2WU7dXR2lW98Zc-PByK',
      coverAlt: 'Futuristic AI chat application interface',
      tech: [
        { icon: 'auto_awesome', title: 'Next.js' },
        { icon: 'terminal', title: 'Python' },
        { icon: 'palette', title: 'Tailwind' },
      ],
      primaryAction: { type: 'live', label: 'Live Demo', icon: 'rocket_launch', url: '#' },
      secondaryAction: { type: 'repo', label: 'Repo', icon: 'code', url: '#' },
    },
  ];

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getProjectById(id: string): Observable<Project | undefined> {
    return of(this.projects.find((p) => p.id === id));
  }
}
