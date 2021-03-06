import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MeteoActuelleComponent } from './meteo-actuelle/meteo-actuelle.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { RatingModule } from 'ngx-bootstrap/rating';
import { SortableModule } from 'ngx-bootstrap/sortable';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MapComponent } from './map/map.component';
import { WeatherComponent } from './weather/weather.component';
import { DisplayWeatherComponent } from './display-weather/display-weather.component'

import { NgxIndexedDBModule } from 'ngx-indexed-db';
import { DatabaseUserService } from './service/database/database-user.service';
import { DatabaseLocationService } from './service/database/database-location.service';
import { DatabaseIdService } from './service/database/database-id.service';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule
} from '@angular/material';
import { CommonModule } from '@angular/common';
import { DisplayVilleComponent } from './display-ville/display-ville.component';
import { RandomColorDirective } from './directive/random-color.directive';

// const
const dbConfig = {
  name: 'MaBd',
  version: 1,
  objectStoresMeta: [{
    store: 'User',
    storeConfig: { keyPath: 'email', autoIncrement: false },
    storeSchema: [
      { name: 'email', keypath: 'email', options: { unique: true } },
      { name: 'password', keypath: 'password', options: { unique: false } },
      { name: 'name', keypath: 'name', options: { unique: false } },
      { name: 'surname', keypath: 'surname', options: { unique: false } },
      { name: 'picture', keypath: 'picture', options: { unique: false } },
      { name: 'sex', keypath: 'sex', options: { unique: false } },
      { name: 'birthday', keypath: 'birthday', options: { unique: false } }
    ]
  },
  {
    store: 'Location',
    storeConfig: { keyPath: 'id', autoIncrement: false },
    storeSchema: [
      { name: 'id', keypath: 'id', options: { unique: true } },
      { name: 'country_name', keypath: 'country_name', options: { unique: false } },
      { name: 'city_name', keypath: 'city_name', options: { unique: false } },
      { name: 'longitude', keypath: 'longitude', options: { unique: false } },
      { name: 'latitude', keypath: 'latitude', options: { unique: false } }
    ]
  },
  {
    store: 'Id',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'id', keypath: 'id', options: { unique: true } },
      { name: 'id_location', keypath: 'id_location', options: { unique: true } }
    ]
  }
  ]
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    MeteoActuelleComponent,
    MapComponent,
    WeatherComponent,
    DisplayWeatherComponent,
    DisplayVilleComponent,
    RandomColorDirective,

  ],
  imports: [
    BsDropdownModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    BsDatepickerModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    RatingModule.forRoot(),
    SortableModule.forRoot(),
    TabsModule.forRoot(),
    TimepickerModule.forRoot(),
    TypeaheadModule.forRoot(),
    FontAwesomeModule,
    ReactiveFormsModule,
    NgxIndexedDBModule.forRoot(dbConfig),
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  providers: [
    DatabaseIdService,
    DatabaseLocationService,
    DatabaseUserService
  ],
  bootstrap: [AppComponent],
  exports: [
    BsDropdownModule,
    TooltipModule,
    ModalModule,
    CollapseModule,
    TabsModule,
    ButtonsModule,
    TypeaheadModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    CommonModule
  ],
  entryComponents: [MeteoActuelleComponent]
})
export class AppModule { }
