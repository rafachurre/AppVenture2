import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SaveGuestPage } from './save-guest';

@NgModule({
  declarations: [
    SaveGuestPage,
  ],
  imports: [
    IonicPageModule.forChild(SaveGuestPage),
  ],
})
export class SaveGuestPageModule {}
