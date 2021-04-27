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
  constructor(private dataServiceService: DataServiceService) {
  }

  ngOnInit(): void {
  }

  public eliminar() {
    this.borrarUser();
  }

  private borrarUser() {
    var cedula = this.cedula;

    this.dataServiceService.DeleteUser(cedula).subscribe(
      res => {
        this.mensaje = "se borro el usuario correctamente";
        this.actionsMessagesInterfaceDelete();
      },
      err => console.log(err)
    );
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

  public refreshData(){
    window.location.reload();
  }


}
