import { Component, OnInit } from '@angular/core';
import { JumboService } from '../../jumbotron.service';

@Component({
  selector: 'app-naked',
  templateUrl: './naked.component.html',
  styleUrls: ['./naked.component.css']
})
export class NakedComponent implements OnInit {

  constructor(private myJumbo: JumboService) { }

  ngOnInit(): void {
  	//setTimeout(() => {
  	this.myJumbo.mudarSubCateg("Naked");
  	//});
  }

}
