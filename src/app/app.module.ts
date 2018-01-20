import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutesModuleModule } from './app.routes.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AboutMeContainerComponent } from './containers/about-me-container/about-me-container.component';
import { FooterComponent } from './components/footer/footer.component';
import { MyWorkComponent } from './containers/my-work/my-work.component';
import { ContactMeComponent } from './containers/contact-me/contact-me.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeContainerComponent,
    FooterComponent,
    MyWorkComponent,
    ContactMeComponent,
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
