import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomeProyectInterfaces } from '../../interfaces/home-proyect-interface';

@Component({
  selector: 'app-home-proyect',
  imports: [RouterLink],
  templateUrl: './home-component-proyect.html',
  styleUrls: ['./home-component-proyect.css'],
})
export default class HomeComponentProyect {
  homeProoyect: HomeProyectInterfaces[] = [
    {
      img: 'https://images.pexels.com/photos/35293936/pexels-photo-35293936.jpeg',
      title: 'System animals',
      description: 'System Veterinary and validation',
      route: '',
    },
    {
      img: 'https://images.pexels.com/photos/10574130/pexels-photo-10574130.jpeg',
      title: 'Microservice Product',
      description: 'Microservice Product full-stack',
      route: '',
    },
  ];
}
