import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

import { HotelInfoPage } from "../hotelInfo/hotelInfo";

export interface Hotel {
  imageUrl: string;
  title: string;
  description: string;
  roomCost: number;
  hasParking: boolean;
  address: string;
  phone: string;
}

@Component({
  selector: "page-hotels",
  templateUrl: "hotels.html",
})
export class HotelsPage {
  hotels: Array<Hotel>;

  parking: boolean = false;
  priceMax: string = "";
  priceMin: string = "";
  hotelsToShow: Array<Hotel>;

  constructor(public navCtrl: NavController) {
    this.hotels = [
      {
        imageUrl:
          "https://img.gazeta.ru/files3/837/4860837/hotel-pic668-668x444-62402.jpg",
        title: "Будапешт",
        description: 'Московский отель "Будапешт"',
        roomCost: 5000,
        hasParking: true,
        address: "Москва, ул. Петровские Линии, 2",
        phone: "8 (495) 729-35-01",
      },
      {
        imageUrl:
          "https://cdn.ostrovok.ru/t/640x400/extranet/50/1c/501c6211826d67319ab8503185fa4032ef4eafb2.jpeg",
        title: "Космос",
        description: 'Гостиница "Космос"',
        roomCost: 3000,
        hasParking: true,
        address: "Москва, пр-т Мира, 150",
        phone: "8 (495) 234-12-06",
      },
      {
        imageUrl:
          "https://cdn.ostrovok.ru/t/1024x768/extranet/40/f5/40f5320a5b37f6bb7a0ccf2c114ee20878574f81.jpeg",
        title: "Drop Inn Mini-Hotel",
        description: "Mini-Hotel",
        roomCost: 2945,
        hasParking: false,
        address: "ulitsa Kalanchevskaya 20, bldg. 1, Moscow",
        phone: "8 (495) 123-45-67",
      },
      {
        imageUrl:
          "https://cdn.ostrovok.ru/t/1024x768/content/55/a9/55a9f0c530af45c2bf551543d2ef17632b7efd8e.jpeg",
        title: "Four Seasons Hotel Moscow",
        description: "Four Seasons Hotel",
        roomCost: 60000,
        hasParking: true,
        address: "2 Okhotny Ryad Street, Moscow",
        phone: "8 (495) 777-77-77",
      },
    ];
    this.hotelsToShow = this.hotels;
  }

  filterHotels() {
    // no filters
    if (
      this.priceMax === "" &&
      this.priceMin === "" &&
      this.parking === false
    ) {
      this.hotelsToShow = this.hotels;
    }

    console.log(this.parking);
    // hasParking
    if (this.parking === false) {
      this.hotelsToShow = this.hotels;
    } else {
      this.hotelsToShow = this.hotels.filter((elem) => {
        return elem.hasParking === this.parking;
      });
    }

    // min price
    if (this.priceMin !== "") {
      this.hotelsToShow = this.hotelsToShow.filter((elem) => {
        return Number(this.priceMin) <= elem.roomCost;
      });
    }

    // max price
    if (this.priceMax !== "") {
      this.hotelsToShow = this.hotelsToShow.filter((elem) => {
        return Number(this.priceMax) >= elem.roomCost;
      });
    }
  }

  openHotelInfo(hotel: Hotel) {
    this.navCtrl.push(HotelInfoPage, { data: hotel });
  }
}
