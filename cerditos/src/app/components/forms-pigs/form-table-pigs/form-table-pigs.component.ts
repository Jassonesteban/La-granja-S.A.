import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../../services/data-service.service';

@Component({
  selector: 'app-form-table-pigs',
  templateUrl: './form-table-pigs.component.html',
  styleUrls: ['./form-table-pigs.component.css']
})
export class FormTablePigsComponent implements OnInit {


  compradores: any = [];
  cerditosComprados: any = [];
  cerdo: any;
  listCompradores: any;

  constructor(private dataServiceService: DataServiceService) { }

  ngOnInit() {
    this.getUserWhitPigs();
  }

  public getUserWhitPigs() {
    this.dataServiceService.GetUsers().subscribe(
       res => {
        this.listCompradores = res;
        this.compradores = this.listCompradores;
        console.log(this.compradores);
      },
      err => console.log(err)
    );

  }

}
