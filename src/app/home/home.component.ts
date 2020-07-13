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
  
  imgs = [1,2,3,4,5,6,7,8,9,10];
  depoimentos = [
    {
      texto: "Em Construção",
      pessoa: "Em Construção",
    },
  ];


  closeButtonText: String = "Fechar";




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
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
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

  config2: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    preloadImages: false,
    lazy: true,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      bulletActiveClass: 'teste',
    },
    breakpoints: {
      // when window width is >=
      600: {
        centeredSlides: false,
        slidesPerView: 3,
        
      }
    }
  }

  config3: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      bulletActiveClass: 'teste',
    },
  }


  imgClick() {
    this.config2['autoplay'] = false;
  }
  lightboxClose() {
    this.config2['autoplay'] = true;
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
