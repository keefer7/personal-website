import { Component, OnInit } from '@angular/core';
import { PersonalInfoComponent } from '../personal-info/personal-info.component';
import { SocialMediaComponent } from '../social-media/social-media.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Alex Keefer\'s Personal Portfolio';
  
  constructor() { }

  ngOnInit() {
  }

}
