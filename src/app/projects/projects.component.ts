import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projectsList = [
    {
      title: "Site d'une association",
      description: 'Site codé avec html5, css and bootsrap',
      demoLink: 'https://ntiranyuhura.github.io/DiaspEspoir/',
      codeLink: 'https://github.com/NTIRANYUHURA/DiaspEspoir'
    },
    {
      title: 'calculatrice',
      description: 'Calculatrice avec Angular16',
      demoLink: 'https://sage-paprenjak-e2289d.netlify.app/',
      codeLink: 'https://github.com/yourusername/project2'
    },
    {
      title: 'Project 2',
      description: 'Agence de voyage avec wordpress',
      demoLink: 'https://ntiranyuhura.github.io/TravelAgency/',
      
    },

    // Add more projects as needed
  ];
}

