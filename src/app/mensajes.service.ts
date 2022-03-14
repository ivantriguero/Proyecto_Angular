import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  mensajes: any[]=[];

  addMensaje(mensaje: string, tipo:string){
    this.mensajes.unshift({mensaje:mensaje, tipo:tipo});
  }

  getMensajes(){
    return this.mensajes
  }

  clear(){
    this.mensajes=[];
    }

  constructor() { }
}
