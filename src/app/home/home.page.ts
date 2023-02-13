import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ManagerService } from '../service/manager.service';
import { InsertReviewsPage } from '../insert-reviews/insert-reviews.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  recensioni: any;

  constructor(
    public gestioneRecensioni: ManagerService,
    public alertController: AlertController,
    public modalController: ModalController
  ) {
    this.recensioni = [];
  }

  ngOnInit() {
    this.getRecensioni();
  }

  getRecensioni() {
    this.gestioneRecensioni.getRecensioni().then((data) => {
      this.recensioni = data;
    });
  }

  async addRecensione() {
    const modal = await this.modalController.create({
      component: InsertReviewsPage,
      mode: 'md'
    });

    modal.onDidDismiss().then((recensione) => {
      if (recensione.data !== undefined) {
        this.recensioni.push(recensione.data);
        this.gestioneRecensioni.addRecensione(recensione.data);
      }
    });

    return await modal.present();
  }

  async presentAlertConfirm(contenitore: string) {
    const alert = await this.alertController.create({
      message: 'Vuoi cancellare la recensione?',
      mode: 'ios',
      buttons: [
        {
          text: 'Annulla',
          role: 'Cancella',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Eliminazione annullata');
          }
        },
        {
          text: 'Cancella',
          handler: () => {
            this.deleteRecensione(contenitore);
            console.log('Eliminazione confermata');
          }
        }
      ]
    });

    await alert.present();
  }

  deleteRecensione(recensione) {
    //Rimuove localmente
    let indice = this.recensioni.indexOf(recensione);

    if (indice > -1) {
      this.recensioni.splice(indice, 1);
    }
    //Rimuove dal database
    this.gestioneRecensioni.deleteRecensione(recensione._id);
  }
}
