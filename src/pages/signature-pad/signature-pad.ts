import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SignaturePad } from 'angular2-signaturepad/signature-pad';

import { FirebaseServiceProvider } from './../../providers/firebase-service/firebase-service';
import { HomePage } from './../home/home';
import { DocumentsPage } from './../../pages/documents/documents';
import { DocumentDetailsPage } from './../document-details/document-details';

/**
 * Generated class for the SignaturePadPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signature-pad',
  templateUrl: 'signature-pad.html',
})
export class SignaturePadPage {

  @ViewChild(SignaturePad) signaturePad: SignaturePad;

  private signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 5,
    'canvasWidth': window.innerWidth*0.9,
    'canvasHeight': window.innerHeight*0.7
  };

  private documentKey: string;
  private pictureString: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fbs: FirebaseServiceProvider) {
    this.documentKey = this.navParams.get("documentKey");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignaturePadPage');
  }

  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }
 
  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    this.pictureString = this.signaturePad.toDataURL();
  }
 
  drawStart() {
  }

  onClear(){
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }

  onSave(){
    let newRegistration = this.navParams.get("newRegistration");
    newRegistration.signaturePic = this.pictureString;
    newRegistration.signedDate = (new Date()).toString();
    newRegistration.status = "Signed";

    this.fbs.updateDocument(this.documentKey, newRegistration);

    debugger

    this.navCtrl.setRoot(HomePage);
    this.navCtrl.push(DocumentsPage, {
      accommodationKey: this.navParams.get("accommodationKey")
    });

    this.navCtrl.push(DocumentDetailsPage, {
      documentKey: this.navParams.get("documentKey")
    });
    
  }

}
