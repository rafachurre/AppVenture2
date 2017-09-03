import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccommodationOptionsPage } from './accommodation-options';

@NgModule({
  declarations: [
    AccommodationOptionsPage,
  ],
  imports: [
    IonicPageModule.forChild(AccommodationOptionsPage),
  ],
})
export class AccommodationOptionsPageModule {}
