import { Component, OnInit } from '@angular/core';
import { JumboService } from '../../jumbotron.service';

@Component({
  selector: 'app-pirulitos',
  templateUrl: './pirulitos.component.html',
  styleUrls: ['./pirulitos.component.css']
})
export class PirulitosComponent implements OnInit {

  constructor(private myJumbo: JumboService) { }

  ngOnInit(): void {
  	this.myJumbo.mudarSubCateg("Pirulitos");
  }

}
