
import { Component, Input } from '@angular/core';
import { Country } from '../../model/country';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.css']
})
export class CountryInfoComponent {
  @Input() country?: Country;
}
