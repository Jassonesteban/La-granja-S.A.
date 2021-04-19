import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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

