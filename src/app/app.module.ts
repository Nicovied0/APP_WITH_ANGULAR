import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { TimerComponent } from './timer/timer.component';
import { Timer2Component } from './timer2/timer2.component';
import { AppRoutingModule } from './app-routing.module';
import { TitleAndNavComponent } from './title-and-nav/title-and-nav.component';
import { LoreComponent } from './lore/lore.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TimerComponent,
    Timer2Component,
    TitleAndNavComponent,
    LoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
