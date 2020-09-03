import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroesModule } from './heroes/heroes.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
/**
 * Services
 */
import { HeroService } from '../services/hero.service';
import { MessageService } from '@app/services/message.service';
import { InMemoryDataService } from './services/in-memory-data.service';
/**
 * Components
 */
import { MessageComponent } from './components/message/message.component';
import { HeroDetailsComponent } from './components/heroes/hero-details/hero-details.component';
import { HeroSearchComponent } from './components/heroes/hero-search/hero-search.component';
/**
 * Pages
 */
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailPageComponent } from './hero-detail-page/hero-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    DashboardComponent,
    HeroDetailPageComponent,
    HeroDetailsComponent,
    HeroSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
    FormsModule,
    HeroesModule,
  ],
  providers: [HeroService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
