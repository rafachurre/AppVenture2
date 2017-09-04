import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { SignaturePadModule } from 'angular2-signaturepad';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { AccommodationOptionsPage } from './../pages/accommodation-options/accommodation-options';
import { SaveGuestPage } from './../pages/save-guest/save-guest';
import { DocumentsPage } from './../pages/documents/documents';
import { SignaturePadPage } from './../pages/signature-pad/signature-pad';
import { DocumentDetailsPage } from './../pages/document-details/document-details';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';

const firebaseConfig = {
  apiKey: "AIzaSyBg4w5fZ_GqRupIC0Db1krcwy-tHRLrU5Y",
  authDomain: "appventure2esp.firebaseapp.com",
  databaseURL: "https://appventure2esp.firebaseio.com",
  projectId: "appventure2esp",
  storageBucket: "appventure2esp.appspot.com",
  messagingSenderId: "1053638116406"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SettingsPage,
    AccommodationOptionsPage,
    SaveGuestPage,
    DocumentsPage,
    SignaturePadPage,
    DocumentDetailsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    SignaturePadModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SettingsPage,
    AccommodationOptionsPage,
    SaveGuestPage,
    DocumentsPage,
    SignaturePadPage,
    DocumentDetailsPage,
    SignaturePad,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseServiceProvider
  ]
})
export class AppModule {}
