import { NgModule } from "@angular/core";
import {Routes, RouterModule } from '@angular/router';

import { ListarVehiculoComponent } from './components/listar-vehiculo/listar-vehiculo.component';
import { RegistrarVehiculoComponent } from './components/registrar-vehiculo/registrar-vehiculo.component';

    

const routes: Routes = [
    {path: '', component: ListarVehiculoComponent},
    {path: 'registrar-vehiculo',component: RegistrarVehiculoComponent },
    {path: 'editar-vehiculo/:id',component: RegistrarVehiculoComponent },
    {path: '**', redirectTo: '', pathMatch:'full' }


];

@NgModule({

    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}