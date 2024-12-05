import { Component } from '@angular/core';
import { Stat } from '../../types/Stats';

@Component({
  selector: 'app-home-footer',
  imports: [],
  templateUrl: './home-footer.component.html',
  styleUrl: './home-footer.component.scss'
})
export class HomeFooterComponent {
  stats: Stat[] = [
    {
      title: 'Subscribe by',
      number: '520+',
      label: 'INSTITUTION',
    },
    {
      title: 'Including',
      number: '200+',
      label: 'DATASETS',
    },
    {
      title: 'Data total',
      number: '2,000+',
      label: 'TERABYTES',
    },
    {
      title: 'Total live-trading AUM',
      number: '$350+',
      label: 'BILLION',
    }
  ];
}
