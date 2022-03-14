import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibrosComponent } from './libros/libros.component';
import { AnadirComponent } from './anadir/anadir.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'anadir', component:AnadirComponent },
  { path: 'libros', component:LibrosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
