
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database'
import { FirebaseServiceProvider } from './../../providers/firebase-service/firebase-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  accomodationsList: Array<any[]> = [];

  constructor(public navCtrl: NavController, public firebaseService: FirebaseServiceProvider) {
    this.firebaseService.getAccomodationsList().subscribe(res=>{
      this.accomodationsList = res;
    });
  }
}
