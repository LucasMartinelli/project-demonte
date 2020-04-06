import { Component, OnInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-up-btn',
  templateUrl: './up-btn.component.html',
  styleUrls: ['./up-btn.component.css']
})
export class UpBtnComponent implements OnInit {

  constructor(private eleRef: ElementRef) {
    if (window.scrollY > 60) {
      this.eleRef.nativeElement.style.display = 'block';
    } else {
      this.eleRef.nativeElement.style.display = 'none';
    }
  }

  ngOnInit(): void {
  }

  	 scroll(): void {
	    window.scrollTo(0, 0);
	};

 @HostListener("window:scroll", ["$event"])
  onWindowScroll(event) {
    if (window.scrollY > 60) {
      this.eleRef.nativeElement.style.display = 'block';
    } else {
      this.eleRef.nativeElement.style.display = 'none';
    }
  }	

}
