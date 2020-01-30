import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicHighLightDirective } from './custom-directives/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './custom-directives/better-highlight/better-highlight.directive';
import { UnlessDirective } from './custom-directives/unless/unless.directive';
import { WhatIsViewContainerComponent } from './what-is-view-container/what-is-view-container.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighLightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    WhatIsViewContainerComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
