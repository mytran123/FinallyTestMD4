import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AwesomeListComponent} from "./components/awesomes/awesome-list/awesome-list.component";
import {AwesomeCreateComponent} from "./components/awesomes/awesome-create/awesome-create.component";
import {AwesomeUpdateComponent} from "./components/awesomes/awesome-update/awesome-update.component";

const routes: Routes = [
  {
    path: "", component: AwesomeListComponent
  },
  {
    path: "create", component: AwesomeCreateComponent
  },
  {
    path: ":id/update", component: AwesomeUpdateComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
