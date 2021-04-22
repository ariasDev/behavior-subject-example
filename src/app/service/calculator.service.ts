import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  suma(arg1: number, arg2: number): number {
    return arg1 + arg2;
  }

  resta(arg1: number, arg2: number): number {
    return arg1 - arg2;
  }

  division(divisor: number, dividendo: number): number {
    if (dividendo !== 0) {
      return divisor / dividendo;
    } else {
      return 0;
    }
  }

  tipoOperaciones(tipoOperacion: string, valor1: number, valor2: number): number {
    switch (tipoOperacion) {
      case 'suma':
        return this.suma(valor1, valor2);

      case 'resta':
        return this.resta(valor1, valor2);

      default:
        console.log('la opciion que seleccionaste no esta inplementada'); 
        return 0;
    }
  }


}
