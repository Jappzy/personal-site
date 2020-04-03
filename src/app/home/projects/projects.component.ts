import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: any[] = [
    {
      title: 'Authentic Essentials',
      subtitle: 'authenticessentials.com',
      logo: 'assets/Authentic-Essentials-Logo.png',
      tech: 'Ionic, Capacitor, Angular, Firebase',
      description: 'Anonymous posts about essential working & coronavirus experiences',
      website: 'https://ionic-essentials.firebaseapp.com/tabs/home',
      repo: 'https://github.com/Jappzy/essentials'
    },
    {
      title: 'Carona Balona',
      subtitle: 'caronabalona.com',
      logo: 'assets/Carona-Balona-Logo.png',
      tech: 'Svelte!',
      description: 'The latest coronavirus data diplayed with cool charts',
      website: 'https://caronabalona.com/',
      repo: 'https://github.com/Jappzy/carona-balona'
    },
    {
      title: 'Menu Mash',
      subtitle: 'menumash.app',
      logo: 'assets/Menu-Mash-Logo.png',
      tech: 'Ionic, Capacitor, Angular, Firebase',
      description: 'Swipe-to-order menu items from local restaurants (Tinder for food)',
      website: 'https://menumash.app/',
      repo: 'https://github.com/Jappzy/menumash'
    },
    {
      title: 'Plebeian Deli',
      subtitle: 'plebieandeli.art',
      logo: 'assets/Plebeian-Deli-Logo.png',
      tech: 'Angular, Firebase, Stripe',
      description: 'Social Network and marketplace for artists.',
      website: 'https://plebeiandeli.art/',
      repo: 'https://github.com/Jappzy/plebeian-deli'
    },
    {
      title: 'Story Stuff Saved',
      subtitle: 'storystuffsaved.com',
      logo: 'assets/Story-Stuff-Saved-Logo.png',
      tech: 'Angular PWA, Firebase',
      description: 'Selling used technology products',
      website: 'https://storystuffsaved.com/',
      repo: 'https://github.com/Jappzy/storystuffsaved.com'
    }
  ];

  constructor() { }

  openNewTab(url: string) {
    window.open(url, '_blank');
  }
}
