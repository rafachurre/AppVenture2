import { FirebaseServiceProvider } from './../../providers/firebase-service/firebase-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  accomodationsList: Array<any[]> = [];
  newAccommodation: { policeID: string, street: string, number: number, city: string, zipCode: string };

  constructor(public navCtrl: NavController, public firebaseService: FirebaseServiceProvider) {
    this.newAccommodation = { policeID: "", street: "", number: undefined, city: "", zipCode: "" };
    this.firebaseService.getAccomodationsList().subscribe(res=>{
      this.accomodationsList = res;
    });
  }

  private addAccommodation() {    
    this.firebaseService.addAccommodation(this.newAccommodation);
  }

  private removeAccommodation(accommodationId) {
    this.firebaseService.removeAccommodation(accommodationId);
  }
}
