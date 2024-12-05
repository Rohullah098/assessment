import { Component } from '@angular/core';
import { HomeNavbarComponent } from "../components/home-navbar/home-navbar.component";
import { HomeContentComponent } from "../components/home-content/home-content.component";
import { HomeFooterComponent } from "../components/home-footer/home-footer.component";

@Component({
  selector: 'app-task3',
  imports: [HomeNavbarComponent, HomeContentComponent, HomeFooterComponent],
  templateUrl: './task3.component.html',
  styleUrl: './task3.component.scss'
})
export class Task3Component {

}
