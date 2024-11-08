import { RecetasService } from './../../service/recetas.service';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ListasPersonalizadasService } from '../../service/listas-personalizadas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-receta-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './receta-form.component.html',
  styleUrl: './receta-form.component.css'
})
export class RecetaFormComponent implements OnInit {

  serviceRec = inject(RecetasService);
  serviceListo = inject(ListasPersonalizadasService);
  fb = inject(FormBuilder);
  router = inject(Router);
  route = inject(ActivatedRoute);

  recetaId: string | null = null;

  formulario=this.fb.nonNullable.group({
    title: ['', Validators.required],
      ingredients: this.fb.array([this.fb.control('', Validators.required)]),  // Asegúrate de que los ingredientes son strings
      vegetarian: [false, Validators.required],  // Tipo boolean
      vegan: [false, Validators.required],       // Tipo boolean
      glutenFree: [false, Validators.required],  // Tipo boolean
      readyInMinutes: [0, [Validators.required, Validators.min(1)]],  // Tipo number
      servings: [1, [Validators.required, Validators.min(1)]],        // Tipo number
      instructions: ['', Validators.required] 
   
  });
ngOnInit(): void {
  
}
get ingredients() {
  return this.formulario.get('ingredients') as FormArray;
}

addIngredient() {
  this.ingredients.push(this.fb.control(''));
}

removeIngredient(index: number) {
  this.ingredients.removeAt(index);
}

addRecipe(){
  if(this.formulario.invalid) return
  const receta = this.formulario.getRawValue()

  this.serviceRec.postRectea(receta).subscribe({
    next: ()=>{
      alert ('receta agregada con exito!')
    },
    error:(e : Error)=>{
      console.log(e.message)

    }
  })
} 

updateRecipe() {
  if (this.formulario.invalid || this.recetaId === null) return;
  const receta = this.formulario.getRawValue();

  this.serviceRec.updateReceta(this.recetaId, receta).subscribe({
    next: () => {
      alert('¡Receta actualizada con éxito!');
      this.router.navigate(['/recetas']);
    },
    error: (e: Error) => {
      console.error('Error al actualizar receta:', e.message);
    }
  });
}

// Método para eliminar receta
deleteRecipe() {
  if (this.recetaId === null) return;

  this.serviceRec.deleteReceta(this.recetaId).subscribe({
    next: () => {
      alert('¡Receta eliminada con éxito!');
      this.router.navigate(['/recetas']);
    },
    error: (e: Error) => {
      console.error('Error al eliminar receta:', e.message);
    }
  });
}

}




















