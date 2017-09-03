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

  private username: string = "" ;

  constructor(public afd: AngularFireDatabase, public toastCtrl: ToastController) { 
    
  }
  
  public getAccomodationsList(){
    return this.afd.list(this.username + '/accommodations/');
  }

  public getAccomodationObject(id){
    return this.afd.object(this.username + '/accommodations/'+ id);
  }

  public addAccommodation(accommodationObject){
    this.afd.list(this.username + '/accommodations/').push(accommodationObject);
    this.presentToast("Accommodation saved successfully!!");
  }

  public removeAccommodation(accommodationId){
    this.afd.list(this.username + '/accommodations/').remove(accommodationId);
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
