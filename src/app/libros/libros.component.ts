import { Component, OnInit} from '@angular/core';
import {LibrosService} from '../libros.service';
import { MensajesService } from '../mensajes.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  
  constructor(private librosService:LibrosService, private mensajesService:MensajesService) { }
  
  libros?: Array<any>;
  
  eliminarLibro(id:any){
    this.librosService.eliminarLibro(id)
    this.mensajesService.addMensaje("¡Elemento eliminado!","warning")
  }

  getLibros(){
    this.librosService.getLibros().subscribe(libros =>this.libros=libros )
    this.mensajesService.addMensaje("¡Libros obtenido correctamente!","success")
  }

  ngOnInit(): void {
  this.getLibros()
  }

}
