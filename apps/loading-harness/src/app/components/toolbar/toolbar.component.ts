import { Component } from '@angular/core';

@Component({
  selector: 'sph-loader-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {

  darkMode = false;

  switchTheme(): void {
    this.darkMode = !this.darkMode;
    if (this.darkMode) {
      document.body.classList.add('darkMode');
    }
    else {
      document.body.classList.remove('darkMode');
    }
  }
}
