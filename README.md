# InitialDevlopment19

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.12.

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
ng g c component-name
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

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

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

## Why This Structure Works for Angular 19

### 1. Monorepo-Friendly Workspace

Angular CLI's default `ng new` setup creates a workspace that supports multiple projects or libraries. Configuration files like `angular.json`, `tsconfig.json`, `package.json`, and `README.md` reside at the root, establishing a unified configuration environment.

### 2. LIFT-Based App Structure

The primary concept involves organizing the `src/app/` directory into three main categories:

- **core/**: Contains application-wide singletons such as authentication logic, layout scaffolding, and global guards/interceptors.
- **shared/**: Houses reusable components, pipes, directives, and services that are not feature-specific. Subfolder conventions can group items by domain, UI, or service.
- **features/** (or **routes/**): Contains self-contained feature modules (e.g., `auth`, `dashboard`, `products`, `bookings`). Each feature folder includes its own components, services, routing, and models.

This architecture enhances modularity, ease of navigation, and maintainability.

```
src/
└── app/
    ├── core/
    │   ├── auth/
    │   │   ├── auth.service.ts
    │   │   └── auth.guard.ts
    │   └── layout/
    │       ├── header.component.ts
    │       └── footer.component.ts
    ├── shared/
    │   ├── ui/
    │   │   ├── button.component.ts
    │   │   └── modal.component.ts
    │   ├── services/
    │   │   └── logger.service.ts
    │   └── domain/
    │       └── user.model.ts
    └── features/
        ├── auth/
        │   ├── login/
        │   └── register/
        ├── bookings/
        │   ├── booking-list/
        │   └── booking-detail/
        └── home/
            └── home.component.ts
```
