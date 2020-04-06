import { Component, OnInit } from '@angular/core';
import { JumboService } from '../jumbotron.service';

@Component({
  selector: 'app-bolos',
  templateUrl: './bolos.component.html',
  styleUrls: ['./bolos.component.css']
})
export class BolosComponent implements OnInit {

  constructor(private myJumbo: JumboService) { }

  ngOnInit(): void {
  	//setTimeout(() => {
  		this.myJumbo.mudarCateg("Bolos");
  	//});
  }

}
