import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
      slideOpts = {
            initialSlide : 0,
            slidesPerView : 3,
            speed :400,
            pagination :false,
            pager : false,
            spaceBetween : 10,
      };

      configPopular = {
        slidesPerView : 1.8,
        spaceBetween : 10,
  };
       
  constructor() {}

}
