import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExerciseOneToTenFingersComponent } from './leasons/leason-zero/exercise-one-to-ten-fingers/exercise-one-to-ten-fingers.component';
import { DrogAndDropComponent } from './test/drog-and-drop/drog-and-drop.component';
import { LeasonZeroComponent } from './leasons/leason-zero/leason-zero.component';



const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
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
        path: 'tests',
        component: DrogAndDropComponent,
    },
];



@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: [],

})

export class AppRoutingModule { }
