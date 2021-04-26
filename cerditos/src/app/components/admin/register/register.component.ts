import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/interfaces/interface';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  admin: user ={
    id: '',
    docType: '',
    name: '',
    lastName: '',
    adress: '',
    tel: '',
    type: 'admin'
  }; 

  administrador: any = [];
  logged: any;

  constructor(private dataServiceService: DataServiceService) { }

  ngOnInit(): void {
  }

  public CreatedAdmin(){
    this.dataServiceService.CreateAdmin(this.admin).subscribe(
      res => {
        console.log("Administrador creado correctamente");
        window.location.reload();
        this.administrador = res;
        console.log(this.administrador);
      }
    )
  }

  validate() {
    var forms = document.querySelectorAll('.needs-validation');
    var type_id = ((document.getElementById("exampleDataList") as HTMLInputElement).value);

    if (type_id === '') {
      var caja = document.getElementById('labelValidation');
      var content = document.getElementById('boxValidation');
      var messaje = "Escoja uno";
      caja.innerHTML = messaje;
      content.style.display = "block";

    } else {
      console.log(type_id);
    }
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

  validateLogin() {
    'use strict'
    window.location.href="/inicio";
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

}
