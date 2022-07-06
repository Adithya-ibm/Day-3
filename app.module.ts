import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { BrowserAnimationsModule } from '@Angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingmodule } from './app-routing.module';
import { BlockComponent } from './block/block.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    NavbarComponent,
    LoginComponent,
    BlockComponent,
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingmodule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }