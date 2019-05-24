import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExperienciaLaboralPage } from './experiencia-laboral.page';

const routes: Routes = [
  {
    path: '',
    component: ExperienciaLaboralPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExperienciaLaboralPage]
})
export class ExperienciaLaboralPageModule {}
