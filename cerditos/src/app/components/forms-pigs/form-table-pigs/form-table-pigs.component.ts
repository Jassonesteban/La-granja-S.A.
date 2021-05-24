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

  cerdito: any = [];
  food: any = [];

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

  public getIdPig( event){
    console.log(event.path[0].innerText);
    this.dataServiceService.getDetailsPigs(event.path[0].innerText).subscribe(
      res => {
        this.cerdito = res;
        console.log(this.cerdito);
        this.food = this.cerdito.food;
        console.log(this.food);
      }
    );
  }

}
