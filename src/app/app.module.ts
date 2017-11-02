import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HighlightDirDirective } from './highlight-dir.directive';
import { UserServiceService } from "./user-service.service";
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { UserComponent } from './user/user.component';
import { TemperaturePipe } from './temperature.pipe';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {
    path: 'users',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HighlightDirDirective,
    PageNotFoundComponentComponent,
    UserComponent,
    TemperaturePipe
  ],
  imports: [
    BrowserModule,FormsModule, RouterModule.forRoot(appRoutes),HttpModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
