import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecetaListComponent } from './recetas/receta-list/receta-list.component';
import { RecetaDetailComponent } from './recetas/receta-detail/receta-detail.component';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomePageComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recetas';
}
