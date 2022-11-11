import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { GridComponent } from './grid/grid.component';
import { TypesettingComponent } from './typesetting/typesetting.component';
import { ColorComponent } from './color/color.component';

const routes: Routes = [
  { path: 'container-component', component: ContainerComponent },
  { path: 'grid-component', component: GridComponent },
  { path: 'typesetting-component', component: TypesettingComponent },
  { path: 'color-component', component: ColorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
