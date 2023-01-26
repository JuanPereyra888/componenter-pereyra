import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectivasComponent } from './componentes/directivas/directivas.component';
import { DirectivaPersonalizadaDirective } from './directives/directiva-personalizada.directive';
import { UppercasePipe } from './pipes/uppercase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DirectivasComponent,
    DirectivaPersonalizadaDirective,
    UppercasePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
