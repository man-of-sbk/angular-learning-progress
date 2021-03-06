import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentRoute: string = 'recipe';

  onNavigate(route: string) {
    this.currentRoute = route;
  }
}
