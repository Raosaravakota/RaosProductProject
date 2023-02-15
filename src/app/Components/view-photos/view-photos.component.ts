import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-photos',
  templateUrl: './view-photos.component.html',
  styleUrls: ['./view-photos.component.scss']
})
export class ViewPhotosComponent implements OnInit {
  @Input() photoCounts?:number;

  constructor(  ) { }
  ngOnInit(): void {
  }

}
