import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { blueTheme, greenTheme, Theme } from './index';

type Themes = 'blueTheme' | 'greenTheme';

const themes = { blueTheme, greenTheme };

@Injectable({ providedIn: 'root' })
export class ThemeService {
  // Stores currently selected theme, defaults to first index in `themes`.
  private _currentTheme: string = Object.keys(themes)[0];

  // Contains the currently selected theme object.
  public theme$: BehaviorSubject<Theme> = new BehaviorSubject(themes[this.currentTheme]);

  public switchTheme(newTheme: Themes): void {
    const nextThemeObj: Theme = themes[newTheme];

    if (!nextThemeObj) {
      console.error(`[ThemeService] '${newTheme}' is not a valid theme key.`);
      return;
    }

    this._currentTheme = newTheme;
    this.theme$.next(nextThemeObj);
  }

  public get currentTheme(): string {
    return this._currentTheme;
  }
}
