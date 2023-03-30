import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AddContractComponent} from "./add-contract/add-contract.component";
import {EditContractComponent} from "./edit-contract/edit-contract.component";
import {ContractListComponent} from "./contract-list/contract-list.component";


const routes: Routes = [
  {
    path: '',
    component: ContractListComponent,
    data: {
      title: 'Contract List'
    }
  },

  {
    path: 'add',
    component: AddContractComponent,
    data: {
      title: 'Add New Contract'
    }
  },

  {
    path: 'edit',
    component: EditContractComponent,
    data: {
      title: 'Edit Contract'
    }
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ContractRoutingModule {
}
