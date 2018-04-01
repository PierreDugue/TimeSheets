import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { HomePageComponent } from './home-page/home-page.component';

import { environment } from '../environments/environment';
import { ManagerUserComponent } from './manager-user/manager-user.component';
import { MenuComponent } from './menu/menu.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'manager', component: ManagerUserComponent },
  { path: '', redirectTo: "/home ", pathMatch: "full" },
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ManagerUserComponent,
    MenuComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatToolbarModule,
    MatSidenavModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/'
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
