import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-simple-contact',
  templateUrl: './simple-contact.component.html',
  styleUrls: ['./simple-contact.component.css']
})
export class SimpleContactComponent implements OnInit {

  datosBasicosForm: FormGroup;
  tipodeDocumento: string;

  constructor(private readonly formBuilder: FormBuilder) {
    this.tipodeDocumento = '';
    this.datosBasicosForm = this.formBuilder.group({
      tipoDeDocumento: new FormControl('', [Validators.required]),
      numeroDocumento: new FormControl(0, [Validators.required]),
      nombrePersona: this.formBuilder.group({
        primerNombre: new FormControl('', [Validators.required]),
        segundoNombre: new FormControl(''),
        primerApellido: new FormControl('', [Validators.required]),
        segundoApellido: new FormControl(''),
      }),
      nombreEmpresa: formBuilder.group({
        nombre: new FormControl('', Validators.required)
      }),
      telefono: new FormControl(0, Validators.required),
      direccion: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
    this.datosBasicosForm.valueChanges.subscribe(value => {
      console.log('valueform: ', value);
      this.tipodeDocumento = value.tipoDeDocumento;
    })
  }

}
