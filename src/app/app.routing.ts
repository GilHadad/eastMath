import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExerciseOneToTenFingersComponent } from './leasons/leason-zero/exercise-one-to-ten-fingers/exercise-one-to-ten-fingers.component';



const appRoutes: Routes = [
    {
        path: 'aaa',
        component: ExerciseOneToTenFingersComponent,
    },
];



@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: [],

})

export class AppRoutingModule { }
