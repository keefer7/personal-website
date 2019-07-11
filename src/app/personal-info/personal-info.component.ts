import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  major:string = "Management Information Systems";
  minor:string = "Computer Information Sciences";
  currentJob:string = "netPark LLC.";
  currentJobLink:string = "https://www.netpark.us";
  jobRoles:Array<string> = ["Software Developer -", "Database Analyst -", "Program Analyst"];
  graduatingCollege:string = "The Ohio State University";

  constructor() { }

  ngOnInit() {
  }

}
