import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  links = [{
    name: 'Scroll',
    path: 'scroll'
  },
  {
    name: 'Drag and Drop',
    path: 'drag-drop'
  }];
  activeLink = this.links[0].path;
  background = '';

  toggleBackground() {
    this.background = this.background ? '' : 'primary';
  }
}
