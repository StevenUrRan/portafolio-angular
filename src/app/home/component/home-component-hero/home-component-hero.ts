import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from './../../../../environments/environment';

@Component({
  selector: 'app-home-component-hero',
  imports: [RouterLink],
  templateUrl: './home-component-hero.html',
  styleUrl: './home-component-hero.css',
})
export class HomeComponentHero {
  env = environment;
}
