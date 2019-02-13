import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { HttpClientModule } from '@angular/common/http';
import { ListingComponent } from './listing/listing.component';
import { DirectoryComponent } from './directory/directory.component';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { UpdateComponentService } from './update-component.service';

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    DirectoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [DataService, UpdateComponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
