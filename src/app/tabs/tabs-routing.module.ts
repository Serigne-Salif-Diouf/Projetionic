import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    component: TabsPage,
    children:[
     { 
      path: 'home',
      children: [
        {
           path: '',
            loadChildren: ()=> import('../home/home.module').then(m=> m.HomePageModule)
        }
      ]
    },
    
    { 
      path: 'shop2',
      children: [
        {
           path: '',
            loadChildren: ()=> import('../shop2/shop2.module').then(m=> m.Shop2PageModule)
        }
      ]
    },

    { 
      path: 'shop3',
      children: [
        {
           path: '',
            loadChildren: ()=> import('../shop3/shop3.module').then(m=> m.Shop3PageModule)
        }
      ]
    },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
