import { Component, OnInit } from '@angular/core';
import { JumboService } from '../jumbotron.service';


@Component({
  selector: 'app-products',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})

export class ProductsPageComponent implements OnInit {

  categoria: string;
  subcategoria: string;

  constructor(private myJumbo: JumboService) { 

  }

  ngOnInit(): void {
     window.scrollTo(0, 0);
     
  	this.myJumbo.emitirCateg.subscribe(
      categ => this.categoria = categ
    );
    this.myJumbo.emitirSubCateg.subscribe(
      subcateg => this.subcategoria = subcateg
    );

  }

}
