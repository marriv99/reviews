import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsertReviewsPageRoutingModule } from './insert-reviews-routing.module';

import { InsertReviewsPage } from './insert-reviews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsertReviewsPageRoutingModule
  ],
  declarations: [InsertReviewsPage]
})
export class InsertReviewsPageModule {}
