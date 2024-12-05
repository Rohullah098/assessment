import { Component } from '@angular/core';
import { NavbarComponent } from "../components/navbar/navbar.component";
import { BannerComponent } from "../components/banner/banner.component";
import { ContentLandingComponent } from "../components/content-landing/content-landing.component";
import { ContactFormComponent } from "../components/contact-form/contact-form.component";
import { FooterComponent } from "../components/footer/footer.component";

@Component({
  selector: 'app-task2',
  imports: [NavbarComponent, BannerComponent, ContentLandingComponent, ContactFormComponent, FooterComponent],
  templateUrl: './task2.component.html',
  styleUrl: './task2.component.scss'
})
export class Task2Component {

}
