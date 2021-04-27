import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../../services/data-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public usuario: string;
  admin: any = [];

  constructor(private router: Router, private dataServiceService: DataServiceService) { }

  ngOnInit() {
    this.getUser();
  }



  public getUser() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    this.getAdmin(this.usuario);
  }


  private getAdmin(cedula: string) {
    this.dataServiceService.getAdmin(cedula).subscribe(
      res => {
        this.admin = res;
      },
      err => console.log(err)
    );
  }

}
