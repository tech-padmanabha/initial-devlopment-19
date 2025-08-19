import { Component } from '@angular/core';

import { HeaderComponent } from './core/layout/header/header.component';
import { NavComponent } from './core/layout/nav/nav.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, NavComponent, FooterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
