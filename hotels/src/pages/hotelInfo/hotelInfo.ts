import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-hotelInfo',
  templateUrl: 'hotelInfo.html'
})
export class HotelInfoPage {
  hotel: {
    imageUrl: string,
    title: string,
    description: string,
    roomCost: number,
    hasParking: boolean,
    address: string,
    phone: string,
    hasParkingAsString: string
  };

  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.hotel = navParams.get('data');
    if (this.hotel.hasParking === true)
      this.hotel.hasParkingAsString = "Имеется";
    else
      this.hotel.hasParkingAsString = "Не имеется";
  }
}
