import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  
})

export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario! : NgForm;

  valorInicial = {
    producto: 'RTX 2080',
    precio: 10,
    existencias:10
  }

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido(): boolean {
    return this.miFormulario?.controls['producto']?.touched &&
           this.miFormulario?.controls['producto']?.value < 0;
  }

  precioValido(): boolean {
    return this.miFormulario?.controls['precio']?.invalid &&
           this.miFormulario?.controls['precio']?.touched;
  }

  // guardar( miFormulario: NgForm ) {
    guardar() {
    // console.log( this.miFormulario ); 
    console.log('Posteo correcto');
    this.miFormulario.resetForm({
      precio: 0,
      existencias : 0
    });
  }

}
