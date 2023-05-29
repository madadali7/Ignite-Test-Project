import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { BusinessComponent } from './business/business.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { StoryComponent } from './story/story.component';
import { C2cComponent } from './c2c/c2c.component';
import { CareersComponent } from './careers/careers.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'c2c', component: C2cComponent },
  { path: 'story', component: StoryComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '/home' } // Handle any other route (optional)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
