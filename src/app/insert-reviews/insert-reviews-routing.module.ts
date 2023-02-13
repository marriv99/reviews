import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsertReviewsPage } from './insert-reviews.page';

const routes: Routes = [
  {
    path: '',
    component: InsertReviewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsertReviewsPageRoutingModule {}
