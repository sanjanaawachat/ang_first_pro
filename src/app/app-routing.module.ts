import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';


const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'services', component: ServicesComponent }, 
  { path: 'blogs', component: BlogsComponent },
  { path: 'contact-us', component: ContactUsComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}