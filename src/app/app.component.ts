import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de usuarios';
  mensaje= '';
  nombre:string='';
  apellido:string='';
  cargo:string='';
  area:string='';
  registrado= false;
  entradas: any[];

  constructor(){
    this.entradas=[
      {titulo:'Pedro Picapiedra, cargo: administrativo, área: contable '},
      {titulo:'Laura Lopez, cargo: recepcionista, área: atención veterinaria'},
      {titulo:'Ezequiel Sanchez, cargo:  docente, área: primaria'},
      {titulo:'Maria Mendoza, cargo: diseñadora, área: creativa'},
    ]

  }



  registrarUsuario(){


    this.registrado= true
    this.mensaje='¡' + this.nombre+' '+ this.apellido + ' se ha registrado con éxito !';
  }
}
