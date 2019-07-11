import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {

  facebookLink:string = "https://www.facebook.com/alex.keefer";
  twitterLink:string = "https://twitter.com/chiefkeef07";
  instagramLink:string = "https://www.instagram.com/chiefkeef07/";
  linkedInLink:string = "https://www.linkedin.com/in/alex-keefer-a4524510b";
  resumeLink:string = "http://alexkeefer.com/Resume_08292018_211345.pdf";

  constructor() { }

  ngOnInit() {
  }

}
