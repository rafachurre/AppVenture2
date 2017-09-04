import { ToastController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FirebaseServiceProvider {

  private username: string = "";

  constructor(public afd: AngularFireDatabase, public toastCtrl: ToastController) {

  }

  /******************
   * Accommodations *
   ******************/
  public getAccomodationsList() {
    return this.afd.list(this.username + '/accommodations/');
  }

  public getAccomodationObject(id) {
    return this.afd.object(this.username + '/accommodations/' + id);
  }

  public addAccommodation(accommodationObject) {
    this.afd.list(this.username + '/accommodations/').push(accommodationObject);
    this.presentToast("Accommodation saved successfully!!");
  }

  public removeAccommodation(id) {
    this.afd.list(this.username + '/accommodations/').remove(id);
    this.presentToast("Accommodation removed!!");
  }

  /*************
   * Documents *
   *************/
  public getDocumentList() {
    return this.afd.list(this.username + '/documents/');

  }

  public getDocumentsByAccommodationList(accommodationKey) {
    return this.afd.app.database().ref(this.username + '/documents/').orderByChild("accommodationKey").equalTo(accommodationKey);
    //return this.afd.list(this.username + '/documents/');
  }

  public getDocumentObject(id) {
    return this.afd.object(this.username + '/documents/' + id);
  }

  public addDocument(documentObject) {
    let addedDocumentKey = this.afd.list(this.username + '/documents/').push(documentObject).key;
    this.presentToast("Document registered !!");
    return addedDocumentKey;
  }

  public updateDocument(documentKey, data) {
    this.afd.object(this.username + '/documents/' + documentKey + "/").update(data);
    this.presentToast("Document updated !!");
  }

  public removeDocument(id) {
    this.afd.list(this.username + '/documents/').remove(id);
    this.presentToast("Document removed !!");
  }

  

  /**********
   * Others *
   **********/
  public syncData() {
    let that = this;
    this.presentToast("Fire sync to be developed!");
    setInterval(setTimeout(function(){
      that.presentToast("But, I don't know if manual sync makes sense")
    }, 3100));
  }

  // Condifmation messges
  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000
    });
    toast.present();
  }

}
