import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { WhyChooseComponent } from './components/why-choose/why-choose.component';
import { WorkComponent } from './components/work/work.component';
import { TestinomialComponent } from './components/testinomial/testinomial.component';
import { BlogComponent } from './components/blog/blog.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { ValuesComponent } from './components/values/values.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    ServicesComponent,
    AboutComponent,
    ContactComponent,
    WhyChooseComponent,
    WorkComponent,
    TestinomialComponent,
    BlogComponent,
    AboutUsComponent,
    BlogsComponent,
    ValuesComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
