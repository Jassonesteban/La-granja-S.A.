import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  comprador: any = [];

  constructor(private dataServiceService: DataServiceService) { }

  ngOnInit() {
  }


}
