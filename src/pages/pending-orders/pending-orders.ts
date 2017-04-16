import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, PopoverController, ViewController} from 'ionic-angular';
import { OrderService } from '../../services/order-service';
import { ReversePipe } from '../../pipes/reverse.pipe';
import { OrderFilterByStatusPipe } from '../../pipes/order.pipe';
import { OrderDetailsPage } from '../order-details/order-details';
import { PopoverPage } from '../pop-over-page/Popover';


// @Component({
//   template: `
//     <ion-list>
//       <ion-list-header>Ionic</ion-list-header>
//       <button ion-item (click)="close()">Learn Ionic</button>
//       <button ion-item (click)="close()">Documentation</button>
//       <button ion-item (click)="close()">Showcase</button>
//       <button ion-item (click)="close()">GitHub Repo</button>
//     </ion-list>
//   `
// })
// class PopoverPage {
//   constructor(public viewCtrl: ViewController) {}

//   close() {
//     this.viewCtrl.dismiss();
//   }
// }

@Component({
  selector: 'page-pending-orders',
  templateUrl: 'pending-orders.html'
})
export class PendingOrdersPage {

  orderList: any;

  constructor(public navCtrl: NavController, private orderService: OrderService, private popOverCtrl: PopoverController) { }

  ngOnInit() {
    this.orderList = this.orderService.getOrders();
  }

  clickOrder(orderId: string) {
    this.navCtrl.push(OrderDetailsPage, {
      orderKey: orderId
    });
  }

  presentPopover(myEvent) {

       let popover = this.popOverCtrl.create(PopoverPage);

    popover.present({
      ev: myEvent
    });
  }

}



