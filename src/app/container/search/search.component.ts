import { Component, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
    searchText: string= '';

    @Output()
    searchTextChanged:EventEmitter<string> = new EventEmitter<string>();

    onSearchTextChanged(){
      this.searchTextChanged.emit(this.searchText);
    }
    
    
    
    
    
    
    updateSearchText(inputEle: HTMLInputElement){
      // this.searchText = event.target.value;
      this.searchText = inputEle.value;
      this.searchTextChanged.emit(this.searchText);
    }
}
