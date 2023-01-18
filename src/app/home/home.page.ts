import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ManagerService } from '../service/manager.service';
import { InsertReviewsPage } from '../insert-reviews/insert-reviews.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  recensioni : any;

  constructor(
    public gestioneRecensioni: ManagerService, 
    public alertController: AlertController, 
    public modalController: ModalController
  ) {}

  async addRecensione() {
    const modal = await this.modalController.create({
      component:InsertReviewsPage,
      mode: 'md'
    });

    modal.onDidDismiss().then((recensione) => {

      if (recensione.data !== undefined) {
        //this.recensioni.push(recensione.data);
        //this.gestioneRecensioni.addRecensione(recensione.data);
      }
    });

    return await modal.present();
  }

}
