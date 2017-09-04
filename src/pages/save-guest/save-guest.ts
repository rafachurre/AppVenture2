import { FirebaseServiceProvider } from './../../providers/firebase-service/firebase-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SignaturePadPage } from './../signature-pad/signature-pad';

/**
 * Generated class for the SaveGuestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-save-guest',
  templateUrl: 'save-guest.html',
})
export class SaveGuestPage {
  
  register: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public fbs: FirebaseServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaveGuestPage');
  }

  onSave(){
    let newRegistration = {
      accommodationKey: this.navParams.get("accommodationKey"),
      firstName: this.register.firstName,
      lastName: this.register.lastName,
      sex: this.register.sex,
      dateOfBirth: this.register.dateOfBirth,
      country: this.register.country,
      idNumber: this.register.idNumber,
      idType: this.register.idType,
      idDateOfIssue: this.register.idDateOfIssue,
      status: "Not Signed",
      registrationDate: (new Date()).toString(),
      signaturePic: "",
      signedDate: "",
      submittedDate: "",
    };

    let documentKey = this.fbs.addDocument(newRegistration);

    this.navCtrl.push(SignaturePadPage, {
      accommodationKey: this.navParams.get("accommodationKey"),
      newRegistration: newRegistration,
      documentKey: documentKey
    })
  }

  onScan(){

  }

}
