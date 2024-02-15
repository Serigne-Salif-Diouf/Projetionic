import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop2',
  templateUrl: './shop2.page.html',
  styleUrls: ['./shop2.page.scss'],
})
export class Shop2Page {


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
