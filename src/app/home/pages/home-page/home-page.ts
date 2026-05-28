import { Component } from '@angular/core';
import { HomeComponentHeader } from "../../component/home-component-header/home-component-header";
import { RouterOutlet } from "@angular/router";
import { HomeComponentFooter } from "../../component/home-component-footer/home-component-footer";
import { HomeComponentForms } from "../../component/home-component-forms/home-component-forms";
import { HomeComponentProfile } from "../../component/home-component-profile/home-component-profile";
import { HomeComponentTechnology } from "../../component/home-component-technology/home-component-technology";

@Component({
  selector: 'app-home-page',
  imports: [HomeComponentHeader, RouterOutlet, HomeComponentFooter, HomeComponentForms, HomeComponentProfile, HomeComponentTechnology],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {}
