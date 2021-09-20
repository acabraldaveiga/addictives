import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { TabsComponent } from './tabs/tabs.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './search-page/search-page.component';
import { ListPageComponent } from './list-page/list-page.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { UpdatesNotificationComponent } from './notif/updates-notification/updates-notification.component';


const routes: Routes = [
  { 
    path: 'tabs',
    component: TabsComponent,
    children: [
      { path: 'search', component: SearchPageComponent },
      { 
        path: 'list', 
        component: ListPageComponent, 
        children: [
          { path: 'item', component: ItemPageComponent },
        ]
    },      
    ]
  },
  { path: '', redirectTo: 'tabs/search', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    SearchPageComponent,
    ListPageComponent,
    ItemPageComponent,
    UpdatesNotificationComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
