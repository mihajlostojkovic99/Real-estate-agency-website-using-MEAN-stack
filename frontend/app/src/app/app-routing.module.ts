import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminRegistracijeComponent } from './admin-registracije/admin-registracije.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminGuard } from './admin.guard';
import { AdminComponent } from './admin/admin.component';
import { ContractsComponent } from './contracts/contracts.component';
import { IndexComponent } from './index/index.component';
import { LotComponent } from './lot/lot.component';
import { PercentsComponent } from './percents/percents.component';
import { RegisterComponent } from './register/register.component';
import { UserAddLotComponent } from './user-add-lot/user-add-lot.component';
import { UserMyLotsComponent } from './user-my-lots/user-my-lots.component';
import { UserRequestsComponent } from './user-requests/user-requests.component';
import { UserWorkerGuard } from './user-worker.guard';
import { UserGuard } from './user.guard';
import { UserComponent } from './user/user.component';
import { WorkerLotsComponent } from './worker-lots/worker-lots.component';
import { WorkerGuard } from './worker.guard';
import { WorkerComponent } from './worker/worker.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user', component: UserComponent, canActivate: [UserGuard]},
  {path: 'worker', component: WorkerComponent, canActivate: [WorkerGuard]},
  {path: 'admin', component: AdminComponent, canActivate: [AdminGuard]},
  {path: 'admin/admin-registracije', component: AdminRegistracijeComponent, canActivate: [AdminGuard]},
  {path: 'admin/admin-users', component: AdminUsersComponent, canActivate: [AdminGuard]},
  {path: 'lot', component: LotComponent, canActivate: [UserWorkerGuard]},
  {path: 'user/addLot', component: UserAddLotComponent, canActivate: [UserGuard]},
  {path: 'user/myLots', component: UserMyLotsComponent, canActivate: [UserWorkerGuard]},
  {path: 'user/myLots/:id', component: LotComponent, canActivate: [UserWorkerGuard]},
  {path: 'user/requests', component: UserRequestsComponent, canActivate: [UserGuard]},
  {path: 'worker/newLots', component: WorkerLotsComponent, canActivate: [WorkerGuard]},
  {path: 'worker/addLot', component: UserAddLotComponent, canActivate: [WorkerGuard]},
  {path: 'worker/allLots', component: WorkerLotsComponent, canActivate: [WorkerGuard]},
  {path: 'worker/promoteLots', component: WorkerLotsComponent, canActivate: [WorkerGuard]},
  {path: 'worker/requests', component: UserRequestsComponent, canActivate: [WorkerGuard]},
  {path: 'worker/contracts', component: ContractsComponent, canActivate: [WorkerGuard]},
  {path: 'admin/addLot', component: UserAddLotComponent, canActivate: [AdminGuard]},
  {path: 'admin/newLots', component: WorkerLotsComponent, canActivate: [AdminGuard]},
  {path: 'admin/contracts', component: ContractsComponent, canActivate: [AdminGuard]},
  {path: 'admin/percents', component: PercentsComponent, canActivate: [AdminGuard]},
  {path: 'user/rents', component: UserComponent, canActivate: [UserGuard]},
  {path: 'user/rentsApartment', component: UserComponent, canActivate: [UserGuard]},
  {path: 'user/rentsHouse', component: UserComponent, canActivate: [UserGuard]},
  {path: 'user/sales', component: UserComponent, canActivate: [UserGuard]},
  {path: 'user/salesApartment', component: UserComponent, canActivate: [UserGuard]},
  {path: 'user/salesHouse', component: UserComponent, canActivate: [UserGuard]},
  {path: 'user/changeProfile', component: RegisterComponent, canActivate: [UserGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
