import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FirebaseServiceProvider } from './../../providers/firebase-service/firebase-service';

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
      console.log(data.val());
      that.documents.push(data);
    });
  }

}
