import { Component } from '@angular/core';

import { ThemeService } from './theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public disabled = false;

  constructor(private themeService: ThemeService) {}

  public switchTheme(theme) {
    this.themeService.switchTheme(theme);
  }

  public get theme() {
    return this.themeService.currentTheme;
  }
}
