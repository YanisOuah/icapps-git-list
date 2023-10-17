import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  @Input({ required: true }) onSearch: (text: string) => void = () => {
    console.log('onSearch Not Initialized');
  };
  name: string = 'icapps';
  searchProjects() {
    if (this.name !== '') {
      this.onSearch(this.name);
    }
  }
}
