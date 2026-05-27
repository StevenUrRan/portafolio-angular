import { Component } from '@angular/core';
import { HomeComponentHeader } from "../../component/home-component-header/home-component-header";
import { HomeComponentHero } from "../../component/home-component-hero/home-component-hero";
import { RouterOutlet } from "@angular/router";
import { HomeComponentFooter } from "../../component/home-component-footer/home-component-footer";
import { HomeComponentForms } from "../../component/home-component-forms/home-component-forms";

@Component({
  selector: 'app-home-page',
  imports: [HomeComponentHeader, HomeComponentHero, RouterOutlet, HomeComponentFooter, HomeComponentForms],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export  default class HomePage {}
