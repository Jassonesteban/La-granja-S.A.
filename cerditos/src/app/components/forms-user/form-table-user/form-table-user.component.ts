import { Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { DataServiceService } from '../../../services/data-service.service';
import { FormDeleteUserComponent } from '../form-delete-user/form-delete-user.component';

@Component({
  selector: 'app-form-table-user',
  templateUrl: './form-table-user.component.html',
  styleUrls: ['./form-table-user.component.css']
})
export class FormTableUserComponent implements OnInit {

  
  @ViewChildren('borrar') delete: QueryList<FormDeleteUserComponent>
  @Output() refresh = new EventEmitter<string>();

  comprador: any = [];

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
      }, 2000);

    }
  

}
