import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExerciseOneToTenFingersComponent } from './leasons/leason-zero/exercise-one-to-ten-fingers/exercise-one-to-ten-fingers.component';
import { DrogAndDropComponent } from './test/drog-and-drop/drog-and-drop.component';
import { LeasonZeroComponent } from './leasons/leason-zero/leason-zero.component';
import { ExerciseMissingNumberComponent
} from './leasons/leason-zero/exercise-missing-number/exercise-missing-number.component';
import { NavDevComponent } from './nav-dev/nav-dev.component';


export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dev',
        pathMatch: 'full',
    },
    {
      path: 'dev',
      component: NavDevComponent,

  },
    {
        path: 'home',
        component: LeasonZeroComponent,

    },
    {
        path: 'aaa',
        component: ExerciseOneToTenFingersComponent,
    },
    {
        path: 'tests-dnd',
        component: DrogAndDropComponent,
    },
    {
      path: 'exercise-missing-number',
      component: ExerciseMissingNumberComponent,
  },
];

function getAllRoutes(): String[] {
  const allRoutes = appRoutes.map(route => {
    return route.path;
  });
  return allRoutes;
}


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: [],

})

export class AppRoutingModule { }
