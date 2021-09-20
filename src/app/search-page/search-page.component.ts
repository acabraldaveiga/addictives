import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  public searchValue: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.searchValue)
  }

}
