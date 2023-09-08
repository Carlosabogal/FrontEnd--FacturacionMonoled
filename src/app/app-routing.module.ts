import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TablesComponent } from './tables/tables.component';
import { BackgroundComponent } from './background/background.component';
import { AppComponent } from './app.component';

const routes: Routes = [


    { path: 'tables', component: TablesComponent },
    { path: 'main', component:MainComponent },
    { path: '', component: BackgroundComponent },
    { path: 'other-page', component: AppComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
