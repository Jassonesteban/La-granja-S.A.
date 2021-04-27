import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../../../services/data-service.service';
import { user } from '../../../interfaces/interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {

  usuario: user ={
    id: '',
    docType: '',
    name: '',
    lastName: '',
    adress: '',
    tel: '',
    type: 'User'
  }; 

  mensaje = '';
  
  

  constructor(private dataServiceService: DataServiceService) { }

  ngOnInit(): void {
  }

  RegisterClient(id, docType, name, lastName, adress, tel){
    if(id.value === '' || docType.value === '' || name.value === '' || lastName.value === '' || adress.value === '' || tel.value === ''){
      this.validate();
    } else {
      this.mensaje = 'Lo estamos registrando, por favor espere';
      this.dataServiceService.CreateUser(this.usuario).subscribe(
        res =>{
          this.mensaje = "El cliente "+ name.value + " " + lastName.value + " fue registrado correctamente";
          document.getElementById('btnModal').click();
        },
        err => console.log(err)
      );
    }
  
  }


  private validate () {
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })
    }



    private reset(){
  
    }

}
