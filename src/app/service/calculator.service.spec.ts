import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

fdescribe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  // describe('Funcion suma', () => {
  //   it('deberia retornar 2', () => {
  //     let response = service.suma(1, 1);
  //     expect(response).toEqual(2);
  //   })

  // })

  describe('Funcion resta', () => {
    it('deberia retornar 2', () => {
      // organizar
      const valor = 3;
      const valorRestar = 1;
      const valorEsperado = 2;

      //actuar
      const response = service.resta(valor, valorRestar);

      //afirmar
      expect(response).toEqual(valorEsperado);
    })

    it('deberia retornar 4', () => {
      const response = service.resta(5, 1);
      expect(response).toEqual(4);
    })
  })

  describe('funcion divison', () => {
    it('deberia devorver 2', () => {
      const divisor = 4;
      const dividendo = 2;
      const valorEsperado = 2;

      const response = service.division(divisor, dividendo);

      expect(response).toEqual(valorEsperado);
    })

    it('deberia devorver un mensaje de error', () => {
      const response = service.division(4, 0);

      expect(response).toEqual(0);
    })
  })

  fdescribe('Funcion tipo de operacion', () => {
    it('al pasarle como  parametro el valor suma deberia sumar los siguientes  parametros: 4,3 y deberia retornar 7', () => {
      const valor1 = 4;
      const valor2 = 3;
      const tipoOperacion = 'suma';
      const valorEsperado = 10;
      const sumaSpy = spyOn(service, 'suma').and.returnValue(10);
      const restaSpy = spyOn(service, 'resta').and.returnValue(10);

      const  respuesta = service.tipoOperaciones(tipoOperacion, valor1, valor2);

      expect(respuesta).toEqual(valorEsperado);
      expect(sumaSpy).toHaveBeenCalledWith(valor1, valor2);
      expect(restaSpy).not.toHaveBeenCalled();
    })

    it('al pasarle como  parametro el valor resta deberia restae los siguientes  parametros: 4,3 y deberia retornar 1', () => {
      const valor = 4;
      const valorRestar = 3;
      const tipoOperacion = 'resta';
      const valorEsperado = 1;

      const  respuesta = service.tipoOperaciones(tipoOperacion, valor, valorRestar);

      expect(respuesta).toEqual(valorEsperado);
    })

  })

});
