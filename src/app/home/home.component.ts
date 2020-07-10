import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {

  constructor() { }
  
  config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      bulletActiveClass: 'teste',
    },
    breakpoints: {
      // when window width is >= 320px
      600: {
        centeredSlides: false,
        slidesPerView: 3,
        pagination: false,
      }
    }
  }

  ngOnInit(): void {
     window.scrollTo(0, 0);
  };
  

	 scroll(): void {
     if (window.innerWidth > 1000) { window.scrollTo(0, 350); } else
     if (window.innerWidth > 765) { window.scrollTo(0, 420); } else
     if (window.innerWidth > 640) { window.scrollTo(0, 250); }
     else { window.scrollTo(0, 210); }
  };
  
  

}
