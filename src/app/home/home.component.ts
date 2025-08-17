import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, NavComponent, MainBodyComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
