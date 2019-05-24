import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'estudios', loadChildren: './estudios/estudios.module#EstudiosPageModule' },
  { path: 'experiencia-laboral', loadChildren: './experiencia-laboral/experiencia-laboral.module#ExperienciaLaboralPageModule' },
  { path: 'idiomas', loadChildren: './idiomas/idiomas.module#IdiomasPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
