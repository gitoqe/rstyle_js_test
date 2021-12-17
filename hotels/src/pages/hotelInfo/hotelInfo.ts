import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

import { Hotel } from "../hotels/hotels";

@Component({
  selector: "page-hotelInfo",
  templateUrl: "hotelInfo.html",
})

export class HotelInfoPage {
  hotel: Hotel;
  hasParkingAsString: string;
  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.hotel = navParams.get("data");
    if (this.hotel.hasParking === true) this.hasParkingAsString = "Имеется";
    else this.hasParkingAsString = "Не имеется";
  }
}
