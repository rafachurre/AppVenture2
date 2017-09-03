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

  newAccommodation: { policeID: string, street: string, number: number, city: string, zipCode: string, imgUrl: string };

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public firebaseService: FirebaseServiceProvider) {
    this.newAccommodation = { policeID: "", street: "", number: undefined, city: "", zipCode: "", imgUrl:"" };
  }

  ionViewDidLoad() {
  }

  private addAccommodation() {    
    this.newAccommodation.imgUrl = this.randomHousePicture();
    this.firebaseService.addAccommodation(this.newAccommodation);
    this.closeModal();
  }

  public closeModal(){
    this.viewCtrl.dismiss();
  }

  /******************
   * TEMP FUNCTIONS *
   ******************/
  //Returns a random house picture
  private randomHousePicture(): string{
    let urlsArray = [
      "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
      "https://i.pinimg.com/736x/47/b9/7e/47b97e62ef6f28ea4ae2861e01def86c--my-dream-house-dream-big.jpg",
      "https://cdn.houseplans.com/product/o2d2ui14afb1sov3cnslpummre/w560x373.jpg?v=15",
      "http://www.porterdavis.com.au/~/media/homes/vienna%20h/vienna%20h%2021/facades/vienna_21_albion.jpg?w=582&amp;h=320&amp;crop=1",
      "http://www.boutiquehomes.com.au/sites/default/files/styles/thumbnail_wide_large/public/home_design/slab_gallery/Grange%2045%20Alpha%20facade_2.jpg?itok=Smme05ku",
      "http://cdn.myfancyhouse.com/wp-content/uploads/2013/06/Fancy-Z-Apartment-by-Studio-1408-4.jpg",
      "http://www.hotelroomsearch.net/im/hotels/at/fancy-apartment-10.jpg",
      "http://www.hotelroomsearch.net/im/hotels/at/fancy-apartment-20.jpg",
      "http://cdn.freshome.com/wp-content/uploads/2010/01/interior-design-apartment13.jpg",
      "https://www.avso.org/wp-content/uploads/files/9/8/1/fancy-apartment-building-in-israel-combines-luxury-and-open-floor-plan-0-981.jpg"
    ]

    let i = Math.floor((Math.random() * 10) + 1);

    return urlsArray[i];
  }

}