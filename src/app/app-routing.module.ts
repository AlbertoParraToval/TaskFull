import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'person',
    loadChildren: () => import('./pages/people/people.module').then( m => m.PeoplePageModule)
  },
  {
    path: 'tasks',
    loadChildren: () => import('./pages/tasks/tasks.module').then( m => m.TasksPageModule)
  },
  {
    path: 'task-manage',
    loadChildren: () => import('./pages/task-manage/task-manage.module').then( m => m.TaskManagePageModule)
  },
  {
    path: 'assign',
    loadChildren: () => import('./pages/assign/assign.module').then( m => m.AssignPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
