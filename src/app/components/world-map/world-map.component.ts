import { Component, Output, EventEmitter } from '@angular/core';
import { Country } from '../../model/country';
import { WorldBankService } from '../../services/world-bank.service';

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.css']
})
export class WorldMapComponent {
  @Output() countrySelected = new EventEmitter<Country>();

  constructor(private worldBankService: WorldBankService) {}

  mouseOver(event: MouseEvent) {
    const target = event.target as SVGElement;
    console.log(target)
    this.worldBankService.getCountryData(target.id).subscribe((info: any) => {
        let countryInfo = info[1][0];
        let country: Country = {
          countryName: countryInfo.name,
          countryCapital: countryInfo.capitalCity,
          countryRegion: countryInfo.region.value,
          incomeLevel: countryInfo.incomeLevel.value,
          longitude: countryInfo.longitude,
          latitude: countryInfo.latitude
        };
        this.countrySelected.emit(country);
        console.log(countryInfo)
      });      
    }
}
