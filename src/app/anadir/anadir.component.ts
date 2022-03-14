import { Component, OnInit } from '@angular/core';
import {LibrosService} from '../libros.service';
import { MensajesService } from '../mensajes.service';


@Component({
  selector: 'app-anadir',
  templateUrl: './anadir.component.html',
  styleUrls: ['./anadir.component.css']
})
export class AnadirComponent implements OnInit {

  titulo="";
  autor="";
  descripcion="";

  constructor(private librosService:LibrosService, private mensajesService:MensajesService) { }

  addLibro(){
    if(this.titulo==""||this.autor==""){
      this.mensajesService.addMensaje("¡Error al agregar nuevo elemento! Rellena los campos necesarios","danger")
    }else{
      this.librosService.addLibro(this.titulo,this.autor,this.descripcion)
      this.mensajesService.addMensaje("¡Elemento agregado correctamente!","success")
    }
  }

  ngOnInit(): void {
  }

}
