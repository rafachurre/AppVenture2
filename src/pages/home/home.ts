import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database'

import { FirebaseServiceProvider } from './../../providers/firebase-service/firebase-service';
import { AccommodationOptionsPage } from './../accommodation-options/accommodation-options';
import { SaveGuestPage } from './../save-guest/save-guest';
import { DocumentsPage } from './../documents/documents';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  accomodationsList: Array<any[]> = [];

  constructor(public navCtrl: NavController, public firebaseService: FirebaseServiceProvider, public popoverCtrl: PopoverController) {
    this.firebaseService.getAccomodationsList().subscribe(res=>{
      this.accomodationsList = res;
    });
  }

  onMoreOptions(event, accommodationKey) {
    let popover = this.popoverCtrl.create(AccommodationOptionsPage);
    popover.present({
      ev: event
    });
  }

  onNewGuest(accommodationKey){
    this.navCtrl.push(SaveGuestPage, {
      accommodationKey: accommodationKey
    });
  }

  onDocuments(accommodationKey){
    this.navCtrl.push(DocumentsPage, {
      accommodationKey: accommodationKey
    });
  }
}
