import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-body',
  templateUrl: './search-body.component.html',
  styleUrls: ['./search-body.component.scss']
})
export class SearchBodyComponent implements OnInit {
  @Input() productBody: any

  constructor() { }

  ngOnInit(): void {
  }

}
