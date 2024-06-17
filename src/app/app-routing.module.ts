import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { DiComponent } from './di/di.component';

const routes: Routes = [

  {
    path : 'di',
    loadChildren: () => import('./di/di.module').then(m => m.DiModule)
  },
  {
    component : TestComponent,
    path : '**',
    loadChildren: () => import('./test/test.module').then(m => m.TestModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
