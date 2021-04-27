import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { AdminComponent } from '../admin/admin.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  usuario: any =[];
  admin: AdminComponent
  constructor(private dataServiceService: DataServiceService) { }

  ngOnInit() {
  }

  public loginAdmin(){
    var cedula = ((document.getElementById("validationCustom010") as HTMLInputElement).value);
    console.log(cedula);
    if(cedula === ''){
      this.validateLogin();
    } else {
      this.dataServiceService.searchUser(cedula).subscribe(
        res => {
          this.usuario = res;
          if(this.usuario){
            localStorage.clear();
            localStorage.setItem('usuario', JSON.stringify(cedula));
            this.usuario = JSON.parse(localStorage.getItem('usuario'));
            window.location.href="/inicio";
            this.admin.getUser();
          } else{
            console.log("ups, este usuario no existe");
          }
          console.log(this.usuario);
        },
        err => console.log(err)
      );

    }
    

  }



  private validateLogin() {
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

}

