import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { map, Observable } from 'rxjs';
import { Receta, Receta2, RecipeInfo } from '../interfaces/recetas';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  constructor() { }

  http = inject(HttpClient);
  private key = environment.tokenLaura;
  private baseUrl = 'http://localhost:3000/recetas';
  


  getRecetasByIngredients (ingredients : string, number:number) : Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': this.key
    });

    const ignorePantry : boolean = true;
    const params = {ingredients, number,ignorePantry}
    const url = "https://api.spoonacular.com/recipes/findByIngredients"

    return this.http.get(url, {headers, params})
  }

  getRecipeInformation (id:number) : Observable <RecipeInfo> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': this.key
    });

    const includeNutrition : boolean = false;
    const addWinePairing : boolean = false;
    const addTasteData : boolean = false;

    const params = {id, includeNutrition, addWinePairing, addTasteData}
    const url = `https://api.spoonacular.com/recipes/${id}/information`;

    return this.http.get<RecipeInfo>(url, {headers, params})
  }

//form
  postRectea(receta: Receta2): Observable <Receta2>{
    return this.http.post<Receta2>(this.baseUrl,receta);
  }

  
   updateReceta(idReceta: string, receta: Receta2): Observable<Receta2> {
    return this.http.put<Receta2>(`${this.baseUrl}/${idReceta}`, receta);
  }

  
  deleteReceta(idReceta: string): Observable<Receta2> {
    return this.http.delete<Receta2>(`${this.baseUrl}/${idReceta}`);
  }
  //form
}
