import { Component } from '@angular/core';
import {LibrosService} from './libros.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Biblioteca';
  constructor(private librosService:LibrosService) { }

}
