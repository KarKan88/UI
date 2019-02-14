import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { DashboardCrmComponent } from '../dashboard-crm/dashboard-crm.component';
import { HistoryComponent} from '../history/history.component';
import {AuthGuard} from '../core/authentication/auth.guard';

export const appRoutes: Routes = [{
    path: '', component: AuthComponent, 
    // children: [
    //     { path: 'dashboard', component: DashboardCrmComponent },
    //     { path: 'material-widgets', loadChildren: '../material-widgets/material-widgets.module#MaterialWidgetsModule' },
    //     { path: 'tables', loadChildren: '../tables/tables.module#TablesModule' },
    //     { path: 'charts', loadChildren: '../charts/charts.module#ChartsModule' },
    //     { path: 'guarded-routes', loadChildren: '../guarded-routes/guarded-routes.module#GuardedRoutesModule' },
    //     { path: 'history', component: HistoryComponent},
    //     { path: 'history?roleId', component: HistoryComponent},
    // ]
}];
