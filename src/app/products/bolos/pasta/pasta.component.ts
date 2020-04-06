import { Component, OnInit } from '@angular/core';
import { JumboService } from '../../jumbotron.service';

@Component({
  selector: 'app-pasta',
  templateUrl: './pasta.component.html',
  styleUrls: ['./pasta.component.css']
})
export class PastaComponent implements OnInit {

  constructor(private myJumbo: JumboService) { }

  ngOnInit(): void {
  	//setTimeout(() => {
  	this.myJumbo.mudarSubCateg("Pasta Americana");
  	//});
  }

}
