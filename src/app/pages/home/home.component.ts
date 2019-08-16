import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  validACN = [
    "000 000 019",
    "000 250 000",
    "000 500 005",
    "000 750 005",
    "001 000 004",
    "001 250 004",
    "001 500 009",
    "001 749 999",
    "001 999 999",
    "002 249 998",
    "002 499 998",
    "002 749 993",
    "002 999 993",
    "003 249 004",
    "003 499 992",
    "003 749 988",
    "003 999 988",
    "004 249 981",
    "005 499 981",
    "005 749 986"
  ];
  constructor() {}

  ngOnInit() {}
}
