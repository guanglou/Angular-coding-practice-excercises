import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { HomeComponent } from './home/home.component';
import { BootstrapUiComponent } from './bootstrap-ui/bootstrap-ui.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'home', component: HomeComponent},
  {path: 'reactive-form', component: ReactiveFormComponent},
  {path: 'template-driven-form', component: TemplateDrivenFormComponent},
  {path: 'bootstrap-ui', component: BootstrapUiComponent },
  {path: 'observables', component: ObservableDemoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
