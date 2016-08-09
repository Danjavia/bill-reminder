import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { BillCreatePage } from '../bill-create/bill-create';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { DateFormatPipe } from 'angular2-moment';

@Component({
  templateUrl: 'build/pages/home/home.html',
  selector: 'app',
  pipes: [DateFormatPipe]
})
export class HomePage {
  billList: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public af: AngularFire, public alertCtrl: AlertController) {
    this.billList = af.database.list('/bills');

  }

  newBill(){
    this.navCtrl.push(BillCreatePage);
  }

  promptPayment(billId: string) {
    let alert = this.alertCtrl.create({
      message: "Mark as paid?",
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Mark as Paid',
          handler: data => {
            this.billList.update(billId, { paid: true });
          }
        }
      ]
    });
    alert.present();
  }
}
