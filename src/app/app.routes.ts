import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "task1",
    loadComponent:()=> import('./task1/task1.component').then(x => x.Task1Component)
  },
  {
    path: "task2",
    loadComponent:()=> import('./task2/task2.component').then(x => x.Task2Component)
  },
  {
    path: "task3",
    loadComponent:()=> import('./task3/task3.component').then(x => x.Task3Component)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'task1'
  }
];
