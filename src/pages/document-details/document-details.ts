import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FirebaseServiceProvider } from './../../providers/firebase-service/firebase-service';

/**
 * Generated class for the DocumentDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-document-details',
  templateUrl: 'document-details.html',
})
export class DocumentDetailsPage {

  document: any;
  test: any

  constructor(public navCtrl: NavController, public navParams: NavParams, public fbs: FirebaseServiceProvider) {
    this.fbs.getDocumentObject(this.navParams.get("documentKey")).subscribe(data => this.document = data);
    console.log(this.document);
  }

  ionViewDidLoad() {
  }

}
