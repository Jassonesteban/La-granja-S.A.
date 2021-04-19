import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-register-pigs',
  templateUrl: './form-register-pigs.component.html',
  styleUrls: ['./form-register-pigs.component.css']
})
export class FormRegisterPigsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Registerpig(){
    this.validate();
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


}
