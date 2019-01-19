import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {

  public pixel = 3.7795275591;

  public imageHeight: number;

  public imageWidth: number;

  public imageSKU: string;

  public showPreview = false;

  constructor() { }

  ngOnInit() {
  }

  public printPreview() {
    this.showPreview = true;
  }

}
