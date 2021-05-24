import { Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { DataServiceService } from '../../../services/data-service.service';
import { FormDeleteUserComponent } from '../form-delete-user/form-delete-user.component';

@Component({
  selector: 'app-form-table-user',
  templateUrl: './form-table-user.component.html',
  styleUrls: ['./form-table-user.component.css']
})
export class FormTableUserComponent implements OnInit {

  
  //@ViewChildren('borrar') delete: QueryList<FormDeleteUserComponent>
 // @Output() refresh = new EventEmitter<string>();

  comprador: any = [];
  person: any = [];
  PigsBuys: any = [];
  alerta = '';

  constructor( private dataServiceService: DataServiceService) { }

  ngOnInit(){
    this.verData();
  }


  public verData(){
    this.dataServiceService.GetUsers().subscribe(
      res => {
        this.comprador = res;
      },
      err => console.log(err)
    );
  }

  public verDataUser(event){
    console.log(event.path[0].lastChild.innerText);
    let cc = event.path[0].lastChild.innerText;
    this.dataServiceService.searchUser(cc.trim()).subscribe(
      res => {
        this.person = res;
        console.log(this.person);
        this.PigsBuys = this.person;
        console.log(this.PigsBuys.pigs);
      },
      err => console.log(err)
    );
  }

  

  public deleteUSER( event ){
    console.log(event.path[0].lastChild.innerText);
    let user = event.path[0].lastChild.innerText;
    this.dataServiceService.DeleteUser(user.trim()).subscribe(
      res => {
        this.person = res;
        alert("Usuario elimiando");
        document.getElementById('closeModal').click();
      }
    )
  }

  /*

  private borrarUser() {
  }

  private actionsMessagesInterfaceDelete() {
    var alertone = document.getElementById('alertWarning');
    alertone.style.display = "none";

    var alertTwo = document.getElementById('alertSuccess');
    alertTwo.style.display = "block";

    var btnCancel = document.getElementById('cancelActionDelete');
    btnCancel.style.display = "none";

    var btnDelete = document.getElementById('btnDeleteUser');
    btnDelete.style.display = "none";

    var btnSuccess = document.getElementById('successfullDeleteUser');
    btnSuccess.style.display = "block";

  }


    ngAfterViewInit() {
      setTimeout(() => {
        this.delete.changes.subscribe(() => {
          if(this.comprador){
            this.delete.toArray().forEach((el, index) => {
              el.cedula = this.comprador[index].id;
              el.nombres = this.comprador[index].name;
              el.apellidos = this.comprador[index].lastName;
              console.log(el);
            });
          }
        });
      }, 9000);

    }
  */

}
