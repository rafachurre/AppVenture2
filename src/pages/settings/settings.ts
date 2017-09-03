import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { SaveAccommodationPage } from './../save-accommodation/save-accommodation';
import { HomePage } from './../home/home';

/**
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  accommodationPage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.accommodationPage = SaveAccommodationPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  navToPage(page) {
    this.navCtrl.push(page.component);
  }

  openModal(){
    const myModal = this.modalCtrl.create("SaveAccommodationPage");
    myModal.present();

    myModal.onDidDismiss((data) => {
      this.navCtrl.setRoot(HomePage);
    })
  }

}
