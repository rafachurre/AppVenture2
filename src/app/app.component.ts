import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SettingsPage } from './../pages/settings/settings';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  rootPages: Array<{ title: string, icon: string, component: any }>;
  navPages: Array<{ title: string, icon: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and rootPages
    this.rootPages = [
      { title: 'Home', icon: "home", component: HomePage },
      { title: 'Settings', icon: "settings", component: SettingsPage }
    ];

    // used for an example of ngFor and navigation
    this.navPages = [
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  setRootPage(page) {
    this.nav.setRoot(page.component);
  }

  navToPage(page) {
    this.nav.push(page.component);
  }
}
