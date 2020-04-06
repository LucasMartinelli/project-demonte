import { Component, OnInit } from '@angular/core';
import { JumboService } from '../../jumbotron.service';

@Component({
  selector: 'app-bemcasados',
  templateUrl: './bemcasados.component.html',
  styleUrls: ['./bemcasados.component.css']
})
export class BemcasadosComponent implements OnInit {

  constructor(private myJumbo: JumboService) { }

  ngOnInit(): void {
  	this.myJumbo.mudarSubCateg("Bem Casados");
  }

}
