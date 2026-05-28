import { Component } from '@angular/core';

@Component({
  selector: 'app-home-component-profile',
  imports: [],
  templateUrl: './home-component-profile.html',
  styleUrl: './home-component-profile.css',
})
export class HomeComponentProfile {
  stats = [
    {
      value: '+3',
      label: 'Proyectos',
    },
    {
      value: 'Java',
      label: 'Backend',
    },
    {
      value: 'Angular',
      label: 'Frontend',
    },
  ];

  highlights = [
    {
      number: '01',
      title: 'Backend solido',
      description: 'APIs REST con Spring Boot, seguridad JWT/OAuth2 y bases relacionales.',
    },
    {
      number: '02',
      title: 'Frontend limpio',
      description: 'Interfaces Angular responsivas, mantenibles y faciles de navegar.',
    },
    {
      number: '03',
      title: 'Entrega completa',
      description: 'Docker, PostgreSQL y flujo de despliegue pensado para produccion.',
    },
  ];
}
