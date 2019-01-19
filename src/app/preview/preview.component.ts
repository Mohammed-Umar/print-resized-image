import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  @Input() image: string;

  @Input() imageHeight: number;

  @Input() imageWidth: number;

  @Input() SKU: string;

  constructor() { }

  ngOnInit() {
  }

}
