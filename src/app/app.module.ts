import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { ThemeService } from './theme/theme.service';

@NgModule({
  bootstrap: [AppComponent],
  imports: [BrowserModule],
  declarations: [AppComponent, ButtonComponent],
  providers: [ThemeService],
})
export class AppModule {}
