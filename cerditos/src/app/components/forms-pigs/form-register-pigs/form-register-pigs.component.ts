import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/data-service.service';
import { pig, food } from '../../../interfaces/interface';

@Component({
  selector: 'app-form-register-pigs',
  templateUrl: './form-register-pigs.component.html',
  styleUrls: ['./form-register-pigs.component.css']
})
export class FormRegisterPigsComponent implements OnInit {

  Pig: pig = {
    breed: '',
    age: null,
    weight: null,
    food: {
      id: null
    },
    user: {
      id: null
    }
  };

  Food: food = {
    dose: null, 
    description: ''
  };

  comida: any = [];
  //cerdito: any = [];

  mensaje = '';

  constructor(private dataServiceService: DataServiceService) { }

  ngOnInit(): void {
  }

  Registerpig(breed, age, weight, dosis, description, cc) {

    if (breed.value === '' || age.value === '' || weight.value === '' || dosis.value === '' || description.value === '' || cc.value === '') {
      this.validate();
    } else {
      this.dataServiceService.CreateFood(this.Food).subscribe(
        res => {
          this.comida = res;
          console.log("comida registrada");
          this.Pig.food.id = Number(this.comida.id);
          console.log("el codigo de la comida es: " + this.Pig.food.id);
          this.dataServiceService.CreatePig(this.Pig).subscribe(
            res => {
              console.log("creado")
              console.log(res);
            },
            err => console.log(err)
          );
        },
        err => console.log(err)
      );
      console.log(this.Pig); 

      /* registrar cerdos */

    }
  }



  private validate() {
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
