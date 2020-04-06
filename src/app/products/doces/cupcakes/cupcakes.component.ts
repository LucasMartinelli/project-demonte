import { Component, OnInit } from '@angular/core';
import { JumboService } from '../../jumbotron.service';

@Component({
  selector: 'app-cupcakes',
  templateUrl: './cupcakes.component.html',
  styleUrls: ['./cupcakes.component.css']
})
export class CupcakesComponent implements OnInit {
  
  constructor(private myJumbo: JumboService) { }

  ngOnInit(): void {
  	this.myJumbo.mudarSubCateg("Cupcakes");
  }

}
