import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FirebaseServiceProvider } from './../../providers/firebase-service/firebase-service';

/**
 * Generated class for the SaveAccommodationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-save-accommodation',
  templateUrl: 'save-accommodation.html',
})
export class SaveAccommodationPage {

  newAccommodation: { policeID: string, street: string, number: number, city: string, zipCode: string };

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public firebaseService: FirebaseServiceProvider) {
    this.newAccommodation = { policeID: "", street: "", number: undefined, city: "", zipCode: "" };
  }

  ionViewDidLoad() {
  }

  private addAccommodation() {    
    this.firebaseService.addAccommodation(this.newAccommodation);
    this.closeModal();
  }

  public closeModal(){
    this.viewCtrl.dismiss();
  }

}