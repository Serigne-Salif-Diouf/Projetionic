import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop3',
  templateUrl: './shop3.page.html',
  styleUrls: ['./shop3.page.scss'],
})
export class Shop3Page {

  constructor() { }

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
  
}
