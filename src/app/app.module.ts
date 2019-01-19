import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResizeImageDirective } from './resize-image.directive';
import { NgxPrintModule } from 'ngx-print';
import { PreviewComponent } from './preview/preview.component';
import { SelectionComponent } from './selection/selection.component';


@NgModule({
  declarations: [
    AppComponent,
    ResizeImageDirective,
    PreviewComponent,
    SelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPrintModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
