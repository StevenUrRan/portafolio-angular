# 🚀 Portafolio Angular
https://portafolio-steven-urieles-rangel.netlify.app/

A modern, **responsive** personal portfolio built with **Angular 21** and Tailwind‑CSS. The project showcases:

- 🌟 A sleek hero section with glass‑morphism navigation.
- 🖼️ A dynamic Projects grid (mirroring the layout used for the new contact form).
- ✉️ **Responsive contact form** on the Home page (form left, descriptive text right) – perfect for recruiters or collaborators.
- 📱 Fully mobile‑friendly layout using Tailwind’s utility‑first classes.
- 🎨 Premium design: custom colour palette, subtle micro‑animations, and dark‑mode ready.

## 🛠️ Tech Stack

- **Framework:** Angular 21 (standalone components where applicable)
- **Styling:** Tailwind‑CSS + custom CSS variables for dark mode
- **Icons / Graphics:** SVG icons from Uiverse.io
- **Build Tool:** Angular CLI (`ng`)
- **Testing:** Vitest (unit) – ready for e2e integration if needed

## ✨ Features

| Feature               | Description                                                                                                    |
| --------------------- | -------------------------------------------------------------------------------------------------------------- |
| **Home page**         | Displays the hero, navigation, and the new two‑column contact section (`<app-forms-page>`).                    |
| **Projects page**     | Grid layout with hover‑scale effects and smooth fade‑up on scroll.                                             |
| **Contact form**      | Built with reactive form placeholders, includes email & password fields, social‑login icons, and a CTA button. |
| **Responsive design** | `grid-cols-1` on mobile → `md:grid-cols-2` on tablets/desktop.                                                 |
| **Dark mode ready**   | CSS variables (`--bg-color`, `--font-color`, etc.) toggle automatically with the system theme.                 |

## ▶️ Running the project locally

```bash
# Install dependencies
npm install

# Start the development server
npm run dev   # or ng serve
```

Open your browser at **http://localhost:4200**. The app hot‑reloads on file changes.

## 📦 Building for production

```bash
npm run build   # or ng build --configuration production
```

The optimized bundle is emitted to the `dist/` folder.

## 🧪 Testing

```bash
# Unit tests (Vitest)
npm test   # or ng test
```

_(End‑to‑end tests are not configured yet but the project is ready for Cypress or Playwright.)_

## 📓 Project structure (highlights)

```
src/
├─ app/
│  ├─ home/
│  │  ├─ component/
│  │  │  ├─ home-component-hero/
│  │  │  ├─ home-component-proyect/
│  │  │  └─ home-component-forms/   <-- contact form component
│  │  └─ pages/
│  │     ├─ home-page/   <-- renders <app-forms-page>
│  │     └─ forms-page/  <-- wrapper for the two‑column layout
│  └─ …
└─ assets/   # images, icons, etc.
```

## 🎨 Design assets

_(Placeholder – replace with real screenshots when ready)_

![Home page preview](./assets/home-preview.png)

## 📚 Additional Resources

- Angular CLI docs: https://angular.dev/tools/cli
- Tailwind CSS: https://tailwindcss.com/
- Uiverse.io (for UI components): https://uiverse.io/

---

_Made with ❤️ by **Steven Urrieles Rangel** – keep it simple, keep it premium._

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.10.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# portafolio-angular
