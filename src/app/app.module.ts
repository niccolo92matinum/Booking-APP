
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './features/search/search.component';
import { CartComponent } from './features/cart/cart.component';
import { LoginComponent } from './features/login/login.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IntToArrayPipe } from "./shared/pipes/int-to-array.pipe";

@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
        CartComponent,
        LoginComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        IonicModule.forRoot({}),
        IntToArrayPipe
    ]
})
export class AppModule { }
