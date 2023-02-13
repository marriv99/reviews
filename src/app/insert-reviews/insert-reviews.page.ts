import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-insert-reviews',
  templateUrl: './insert-reviews.page.html',
  styleUrls: ['./insert-reviews.page.scss']
})
export class InsertReviewsPage implements OnInit {
  titolo: String;
  descrizione: String;
  rating: Number;

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  save(): void {
    let recensione = {
      titolo: this.titolo,
      descrizione: this.descrizione,
      rating: th
    };

    this.modalController.dismiss(recensione);
  }

  async close() {
    await this.modalController.dismiss();
  }
}
