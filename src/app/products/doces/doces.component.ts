import { Component, OnInit } from '@angular/core';
import { JumboService } from '../jumbotron.service';

@Component({
  selector: 'app-doces',
  templateUrl: './doces.component.html',
  styleUrls: ['./doces.component.css']
})
export class DocesComponent implements OnInit {

  constructor(private myJumbo: JumboService) { }

  ngOnInit(): void {
  	this.myJumbo.mudarCateg("Doces");
  }

}
