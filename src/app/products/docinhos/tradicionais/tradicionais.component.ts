import { Component, OnInit } from '@angular/core';
import { JumboService } from '../../jumbotron.service';

@Component({
  selector: 'app-tradicionais',
  templateUrl: './tradicionais.component.html',
  styleUrls: ['./tradicionais.component.css']
})
export class TradicionaisComponent implements OnInit {

  constructor(private myJumbo: JumboService) { }

  ngOnInit(): void {
  	this.myJumbo.mudarSubCateg("Tradicionais");
  }

}
