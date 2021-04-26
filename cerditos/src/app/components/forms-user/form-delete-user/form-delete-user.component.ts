import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { user } from '../../../interfaces/interface';
import { DataServiceService } from '../../../services/data-service.service';

@Component({
  selector: 'app-form-delete-user',
  templateUrl: './form-delete-user.component.html',
  styleUrls: ['./form-delete-user.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush  
})
export class FormDeleteUserComponent implements OnInit {

 @Input() cedula: string;
 @Input() nombres: string;
 @Input() apellidos: string;
 
 @Output() refrescar = new EventEmitter<string>();

 mensaje = '';
  constructor( private dataServiceService: DataServiceService) { 
  }

  ngOnInit(): void {
  }
 
  public eliminar(){ 
    this.deleteUser(); 
  }

  private deleteUser(){
    var cedula = this.cedula;
    var alertOne = document.getElementById('alertOne');
    var alertTwo = document.getElementById('alertTwo');
    var success = document.getElementById('alertSuccess');
    this.dataServiceService.DeleteUser(cedula).subscribe(
      res => {
        this.mensaje = "Se elimino el usuario correctamente";
        console.log("se elimino el usuario");
        alertOne.style.display = "none";
        alertTwo.style.display = "none";
        success.style.display = "block";
        //document.getElementById('btnclosed').click();
        this.refrescar.emit();
      },
      err => console.log(err)
    );
  }

}
