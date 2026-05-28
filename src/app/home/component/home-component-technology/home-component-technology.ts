import { Component } from '@angular/core';

@Component({
  selector: 'app-home-component-technology',
  imports: [],
  templateUrl: './home-component-technology.html',
  styleUrl: './home-component-technology.css',
})
export class HomeComponentTechnology {
  technologies = [
    {
      name: 'Java',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      description: 'POO, Java 17/21 y desarrollo backend empresarial.',
    },
    {
      name: 'Spring Boot',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      description: 'APIs REST, Spring Security, JWT, OAuth2 y servicios escalables.',
    },
    {
      name: 'Angular',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      description: 'Aplicaciones frontend modernas con arquitectura por componentes.',
    },
    {
      name: 'TypeScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      description: 'Código tipado, mantenible y preparado para crecer.',
    },
    {
      name: 'PostgreSQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      description: 'Persistencia relacional, consultas optimizadas y datos seguros.',
    },
    {
      name: 'Docker',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      description: 'Contenedores, entornos reproducibles y despliegues consistentes.',
    },
  ];
}
