import { Component, OnInit } from '@angular/core';
import { JumboService } from '../../jumbotron.service';

@Component({
  selector: 'app-finos',
  templateUrl: './finos.component.html',
  styleUrls: ['./finos.component.css']
})
export class FinosComponent implements OnInit {

  constructor(private myJumbo: JumboService) { }

  ngOnInit(): void {
  	this.myJumbo.mudarSubCateg("Finos");
  }

}
