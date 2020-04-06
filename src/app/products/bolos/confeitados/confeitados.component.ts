import { Component, OnInit } from '@angular/core';
import { JumboService } from '../../jumbotron.service';

@Component({
  selector: 'app-confeitados',
  templateUrl: './confeitados.component.html',
  styleUrls: ['./confeitados.component.css']
})
export class ConfeitadosComponent implements OnInit {

  constructor(private myJumbo: JumboService) { }

  ngOnInit(): void {
  	//setTimeout(() => {
  	this.myJumbo.mudarSubCateg("Confeitados");
  	//});
  }

}
