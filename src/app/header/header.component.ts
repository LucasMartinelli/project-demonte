import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	sticky: boolean = false;

  constructor() { }

  ngOnInit(): void {	
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event) {
    if (window.scrollY > 60) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

}
