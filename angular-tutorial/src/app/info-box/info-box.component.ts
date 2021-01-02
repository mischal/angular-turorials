import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent implements OnInit {

  text = 'Text in Infobox';
  isHidden = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
   this.isHidden = !this.isHidden;
  }

}
