import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-update-user',
  templateUrl: './form-update-user.component.html',
  styleUrls: ['./form-update-user.component.css']
})
export class FormUpdateUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  UpdateClient(){
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
