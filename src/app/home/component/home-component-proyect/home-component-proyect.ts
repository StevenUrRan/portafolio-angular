import { Component } from '@angular/core';
import { HomeProyectInterfaces } from '../../interfaces/home-proyect-interface';

@Component({
  selector: 'app-home-proyect',
  templateUrl: './home-component-proyect.html',
  styleUrls: ['./home-component-proyect.css'],
})
export default class HomeComponentProyect {
  homeProjects: HomeProyectInterfaces[] = [
    {
      img: 'https://images.pexels.com/photos/35293936/pexels-photo-35293936.jpeg',
      title: 'Sistema Veterinario',
      description: 'Gestion de pacientes, validaciones y flujo operativo para veterinarias.',
      stack: ['Java', 'Spring Boot', 'Angular'],
      repoUrl: 'https://github.com/StevenUrRan/System-animals-veterinary.git',
    },
    {
      img: 'https://images.pexels.com/photos/10574130/pexels-photo-10574130.jpeg',
      title: 'Microservicio de Productos',
      description: 'Servicio full-stack para catalogo, inventario y persistencia de productos.',
      stack: ['Spring', 'PostgreSQL', 'Docker'],
      repoUrl: 'https://github.com/stevenurieles',
    },
    {
      img: 'https://images.pexels.com/photos/37595189/pexels-photo-37595189.jpeg',
      title: 'Buscador de GIFs',
      description: 'Explorador responsive conectado a una API externa con busqueda dinamica.',
      stack: ['Angular', 'TypeScript', 'API'],
      repoUrl: 'https://github.com/StevenUrRan/gifs-app.git',
    },
    {
      img: 'https://images.pexels.com/photos/3981764/pexels-photo-3981764.jpeg',
      title: 'Api productos',
      description: 'Exploradory registro de productos',
      stack: ['JAVA', 'SPRING BOOT', 'API'],
      liveUrl: 'https://spring-boot-jwt-production-api.onrender.com/swagger-ui/index.html',
      repoUrl: 'https://github.com/StevenUrRan/spring-boot-jwt-production-api-.git',
    },
    {
      img: 'https://images.pexels.com/photos/37356604/pexels-photo-37356604.jpeg',
      title: 'Portafolio personal',
      description: 'Conoce las tecnologias, y conocimientos de desarrollo',
      stack: ['Angular', 'TypeScript', 'API'],
      liveUrl: 'https://portafolio-dem-steven.netlify.app',
      repoUrl: 'https://github.com/StevenUrRan/portafolio-angular.git',
    },
  ];
}
