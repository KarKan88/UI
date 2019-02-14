import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [   
  {path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
  
  {path: '**', redirectTo: 'auth/'},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
