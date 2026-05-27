import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { CommonModule } from '@angular/common';

interface MenuItem {
  title: string;
  route: string[];
  fragment: string;
  icon: string;
}

@Component({
  selector: 'app-home-component-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './home-component-header.html',
  styleUrl: './home-component-header.css',
})
export class HomeComponentHeader {

  evn = environment;

  isMenuOpen = false;
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (typeof window !== 'undefined') {
      this.isScrolled = window.scrollY > 20;
    }
  }

  menuItems: MenuItem[] = [
    {
      title: 'Home',
      route: ['/home'],
      fragment: '',
      icon: 'house'
    },
    {
      title: 'Project',
      route: ['/home'],
      fragment: 'proyectos-seccion',
      icon: 'rocket'
    },
    {
      title: 'About',
      route: ['/home'],
      fragment: 'about-seccion',
      icon: 'user'
    },
    {
      title: 'Contact',
      route: ['/home'],
      fragment: 'contacto-seccion',
      icon: 'chat'
    }
  ];

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(){
    this.isMenuOpen = false;
  }
}
