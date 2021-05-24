import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './shopping/form/form.component';
import { MainComponent } from './shopping/main/main.component';
import { AmulComponent } from './shopping/amul/amul.component';

const routes: Routes = [
  {path:'',redirectTo:'form',pathMatch:'full'},
//   {path:'exampleofsidenav',component:MainsidenavComponent,
// children:[
//   {path:'formbooking',component:FormbookingComponent},
// ]},
{path:'form',component:FormComponent},
{path:'main',component:MainComponent,
children:[
  {path:'amul',component:AmulComponent}
]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
