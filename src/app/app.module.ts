import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './shared/home-component.component';
import { ServerComponentComponent } from './shared/server-component.component';
import { UserComponentComponent } from './shared/user-component.component'; 
import { HttpClientModule } from '@angular/common/http';
const AppRoutes = [
{path: '', component:HomeComponentComponent},
{ path: 'server', component:ServerComponentComponent },
{ path: 'user', component:UserComponentComponent },
{ path: 'server/:ServerId', component:ServerComponentComponent },
{ path: 'user/:customerId/:customerName', component:UserComponentComponent },


] 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    ServerComponentComponent,
    UserComponentComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
