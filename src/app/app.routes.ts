import { Routes } from '@angular/router';
import { RecetaDetailComponent } from './recetas/receta-detail/receta-detail.component';
import { RecetaListComponent } from './recetas/receta-list/receta-list.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RecetaFormComponent } from './recetas/receta-form/receta-form.component';

export const routes: Routes = [

  {
    path: 'receta-detalle/:id',
    component: RecetaDetailComponent

  },
  {
    path: 'buscar-receta',
    component: RecetaListComponent
  },
  {
    path:'inicio',
    component: HomePageComponent
  },
  {
    path:'',
    component: RecetaFormComponent

  }


];
