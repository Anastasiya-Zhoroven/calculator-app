import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CalculatorHeaderComponent } from './calculator-header/calculator-header.component'
import { CalculatorScreenComponent } from './calculator-screen/calculator-screen.component'
import { CalculatorMainComponent } from './calculator-main/calculator-main.component'

@NgModule({
  declarations: [
    AppComponent,
    CalculatorHeaderComponent,
    CalculatorScreenComponent,
    CalculatorMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
