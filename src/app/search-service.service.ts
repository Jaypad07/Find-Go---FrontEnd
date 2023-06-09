import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchedWord: string = '';

  constructor() { }

  getSearchWord(): string {
    return this.searchedWord;
  }

  setSearchWord(word: string): void {
    this.searchedWord = word;
  }
}
