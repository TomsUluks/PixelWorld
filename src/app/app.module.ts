import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutesModuleModule } from './app.routes.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AboutMeContainerComponent } from './containers/about-me-container/about-me-container.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeContainerComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutesModuleModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
