import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { HeaderComponent } from './components/header/header.component';
import { JobsCompaniesComponent } from './components/jobs-companies/jobs-companies.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SkilsComponent } from './components/skils/skils.component';
import { WorkMeComponent } from './components/work-me/work-me.component';
import { TestimonyComponent } from './components/testimony/testimony.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeaderComponent, AboutMeComponent, SkilsComponent, JobsComponent,
            JobsCompaniesComponent,WorkMeComponent, TestimonyComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portifolioDevBastos';
}
