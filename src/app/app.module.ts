import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LibrosComponent } from './libros/libros.component';
import { AnadirComponent } from './anadir/anadir.component';
import { AppRoutingModule } from './app-routing.module';
import { MensajesComponent } from './mensajes/mensajes.component';

@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,
    AnadirComponent,
    MensajesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
