import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeasonZeroComponent } from './leasons/leason-zero/leason-zero.component';
import { LeasonHeaderComponent } from './leasons/leason-header/leason-header.component';
import { LeasonScaleComponent } from './leasons/leason-scale/leason-scale.component';
import { LiveExerciseContainerComponent } from './leasons/live-exercise-container/live-exercise-container.component';
import { HintsComponent } from './leasons/live-exercise-container/hints/hints.component';
import { ExrciseHistoryComponent } from './exrcise-history/exrcise-history.component';

@NgModule({
  declarations: [
    AppComponent,
    LeasonZeroComponent,
    LeasonHeaderComponent,
    LeasonScaleComponent,
    LiveExerciseContainerComponent,
    HintsComponent,
    ExrciseHistoryComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
