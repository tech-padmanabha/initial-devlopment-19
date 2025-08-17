import { Component } from '@angular/core';
import { MainBodyComponent } from './main-body/main-body.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainBodyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
