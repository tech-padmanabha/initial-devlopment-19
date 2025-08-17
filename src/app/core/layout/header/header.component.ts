import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  title = 'my-first-angular';
  sidebarVisible = true;

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
