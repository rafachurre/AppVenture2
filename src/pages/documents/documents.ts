import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FirebaseServiceProvider } from './../../providers/firebase-service/firebase-service';
import { DocumentDetailsPage } from './../document-details/document-details';

/**
 * Generated class for the DocumentsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-documents',
  templateUrl: 'documents.html',
})
export class DocumentsPage {
  
  documents: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public fds: FirebaseServiceProvider) {
  }

  ionViewDidLoad() {
    var that = this;
    this.fds.getDocumentsByAccommodationList(this.navParams.get("accommodationKey")).on("child_added", function(data) {
      that.documents.push(data);
    });
  }

  onDocumentClicked(documentKey){
    this.navCtrl.push(DocumentDetailsPage, {
      documentKey: documentKey
    })
  }

}
