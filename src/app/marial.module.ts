import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    DragDropModule,
    MatIconModule
  ],
  exports:[
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    DragDropModule,
    MatIconModule
  ],
  providers: [],
})
export class MaterialModule { }
