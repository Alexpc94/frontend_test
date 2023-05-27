import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comprobante } from './../../../model/comprobante'

@Component({
  selector: 'app-comprob',
  templateUrl: './comprob.component.html',
  styleUrls: ['./comprob.component.css']
})
export class ComprobComponent {
  title="Comprobantes"
  registerForm!: FormGroup;
  submitted = false;
  comp!: Comprobante
  @ViewChild('closebutton') closebutton:any;
  
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        fecha: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
        tc: ['', Validators.required],
        bol: ['', Validators.required],
        dol: ['', Validators.required],
        idrem: ['', Validators.required],
        iddes: ['', Validators.required]
    })
  }
  // Getter para el acceso facil a los atributos del formualario
  get f() { return this.registerForm.controls; }
   //ADICIONAR DATOS
	onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if ((this.registerForm.invalid)==true) {
      return;
    }
    //armando la interface
    /*
    this.comp = {
      id:0,
      fecha : this.registerForm.controls.codpro.value,
      id_rem : (this.registerForm.controls.nombre.value).toUpperCase(),
      id_des : (this.registerForm.controls.nombre.value).toUpperCase(),
      tc : this.registerForm.controls.estado.value,
      bol : this.registerForm.controls.estado.value,
      dol : this.registerForm.controls.estado.value
    }
    */
    this.closebutton.nativeElement.click();
  }
uno(){ }
dos(){}

}
