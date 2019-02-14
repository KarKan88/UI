import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResponsiveTableComponent } from './responsive-table/responsive-table.component';

const materialWidgetRoutes: Routes = [
  	{ path: 'responsive', component: ResponsiveTableComponent ,data: { animation: 'responsive' }}
];

@NgModule({
  imports: [
    RouterModule.forChild(materialWidgetRoutes)
  	],
  exports: [
    RouterModule
  ]
})
export class TablesRouterModule {}
