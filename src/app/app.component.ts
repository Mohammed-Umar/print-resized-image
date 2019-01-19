import { Component, OnInit } from '@angular/core';
import FileSaver from 'file-saver';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

const URL = 'http://localhost:3000/api/upload';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'print1';

  public pixel = 3.7795275591;

  public imageHeight: number;

  public imageWidth: number;

  public imageSKU: string;

  public imageUrl: string;

  public showPreview = false;

  public selectedImage;

  public prinatableImage;

  constructor() { }

  ngOnInit() {
    // this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    // this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
    //      console.log('ImageUpload:uploaded:', item, status, response);
    //      alert('File uploaded successfully');
    //  };
  }

  public detectFile(event) {
    if (event.target.files && event.target.files[0]) {
      const newFile = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.prinatableImage = reader.result;

      reader.readAsDataURL(newFile);
    }
    // const fileType = event.target.files[0].type;
    // this.selectedImage = event.target.files[0].name;
    // this.imageUrl = `../assets/${this.selectedImage}`;
    // FileSaver.saveAs( this.imageUrl, 'uploaded image');
    // const file = new File([this.imageUrl], this.selectedImage);
    // FileSaver.saveAs(file);
    // this.imageUrl = `../assets/${this.selectedImage}`;
  }



  public printPreview() {
    this._calculateDimensions();
    this.showPreview = true;
  }

  private _calculateDimensions() {
    this.imageHeight = this.imageHeight * this.pixel;
    this.imageWidth = this.imageWidth * this.pixel;
  }
}
