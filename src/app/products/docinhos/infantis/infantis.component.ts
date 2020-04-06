import { Component, OnInit } from '@angular/core';
import { JumboService } from '../../jumbotron.service';

@Component({
  selector: 'app-infantis',
  templateUrl: './infantis.component.html',
  styleUrls: ['./infantis.component.css']
})
export class InfantisComponent implements OnInit {

  constructor(private myJumbo: JumboService) { }

  ngOnInit(): void {
  	this.myJumbo.mudarSubCateg("Infantis");
  }

}
