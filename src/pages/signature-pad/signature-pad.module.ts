import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignaturePadPage } from './signature-pad';

@NgModule({
  declarations: [
    SignaturePadPage,
  ],
  imports: [
    IonicPageModule.forChild(SignaturePadPage),
  ],
})
export class SignaturePadPageModule {}
