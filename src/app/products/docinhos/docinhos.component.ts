import { Component, OnInit } from '@angular/core';
import { JumboService } from '../jumbotron.service';

@Component({
  selector: 'app-docinhos',
  templateUrl: './docinhos.component.html',
  styleUrls: ['./docinhos.component.css']
})
export class DocinhosComponent implements OnInit {

  constructor(private myJumbo: JumboService) { }

  ngOnInit(): void {
  	this.myJumbo.mudarCateg("Docinhos");
  }

}
