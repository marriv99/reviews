import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-insert-reviews',
  templateUrl: './insert-reviews.page.html',
  styleUrls: ['./insert-reviews.page.scss'],
})
export class InsertReviewsPage implements OnInit {
  titolo : String | undefined;
  descrizione : String | undefined;
  rating : Number | undefined;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async close() {
    await this.modalController.dismiss();
  }

}
