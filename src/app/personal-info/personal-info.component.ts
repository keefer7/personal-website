import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  major:string = "Management Information Systems";
  minor:string = "Computer Information Sciences";
  currentJob:string = "Neudesic";
  currentJobLink:string = "https://www.neudesic.com/";
  jobRoles:Array<string> = ["Software Developer"];
  graduatingCollege:string = "The Ohio State University";

  constructor() { }

  ngOnInit() {
  }

}
