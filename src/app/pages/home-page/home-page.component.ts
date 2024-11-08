import { Component } from '@angular/core';
import { RecetaListComponent } from '../../recetas/receta-list/receta-list.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RecetaListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
