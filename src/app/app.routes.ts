import { Routes } from '@angular/router';

import { CrearComponent } from './components/crear/crear.component';
import { ActualizarComponent } from './components/actualizar/actualizar.component';

export const routes: Routes = [
    {path: '', component: CrearComponent},
    {path: 'actualizar', component: ActualizarComponent}
   
];
