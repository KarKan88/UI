import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule,
        MatToolbarModule,
        MatTabsModule,
        MatFormFieldModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatCheckboxModule,
        MatTooltipModule,
        MatChipsModule,
        MatButtonToggleModule,
        MatIconModule,
        MatButtonModule  } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog'
import { FlexLayoutModule } from '@angular/flex-layout';
import { HistoryComponent } from './history.component';



export const appRoutes: Routes = [
    { path: '', component: HistoryComponent },
];

@NgModule({
  imports: [
    MatCardModule,
    MatToolbarModule,
    MatTabsModule,
    MatFormFieldModule,
    MatTableModule,
    FlexLayoutModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
         MatTooltipModule,
         MatChipsModule,
         MatButtonToggleModule ,
         MatButtonModule,
         MatIconModule,
         MatDialogModule,
    CommonModule,
    RouterModule.forChild(appRoutes),
    
  ],
  declarations: [HistoryComponent],
  exports: [ ]
})
export class HistoryModule { }
