import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos.service';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { CicleComponent } from './cicle/cicle.component';


@NgModule({
  declarations: [CursosComponent, 
                 CursoDetalheComponent, 
                 DataBindingComponent, 
                 InputPropertyComponent, 
                 OutputPropertyComponent, 
                 CicleComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CursosComponent
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }
