import { Component } from '@angular/core';
import { Country } from './model/country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'State Government Office';
  selectedCountry?: Country;

  onCountrySelect(country: Country) {
    this.selectedCountry = country;
  }
}
