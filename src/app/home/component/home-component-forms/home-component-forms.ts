import { Component } from '@angular/core';

@Component({
  selector: 'app-home-component-forms',
  imports: [],
  templateUrl: './home-component-forms.html',
  styleUrl: './home-component-forms.css',
})
export class HomeComponentForms {
  onSubmit(event: Event) {
    event.preventDefault();
    alert('¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.');
    // Optionally reset the form
    if (event.target instanceof HTMLFormElement) {
      event.target.reset();
    }
  }
}
