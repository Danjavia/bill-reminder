import { Component } from '@angular/core';
import { Platform, ionicBootstrap } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { HomePage } from './pages/home/home';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp, [
  FIREBASE_PROVIDERS,
  defaultFirebase({
    apiKey: "AIzaSyCw1SKmz1Bu2ibncu5Bxd1sZgR1taV7ujM",
    authDomain: "aftutorial-ef306.firebaseapp.com",
    databaseURL: "https://aftutorial-ef306.firebaseio.com",
    storageBucket: "aftutorial-ef306.appspot.com",
  })
]);
