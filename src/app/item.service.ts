import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { item } from './item-list/item-list.component';
@Injectable({
  providedIn: 'root'
})
export class ItemService {
private itens: item[] = [];

getAllItems(): Observable<item[]> {
  return of(this.items);
}

getItemById(id: number): Observable<Item | undefined> {
  return of(this.items.find(item => item.id === id));
}

addItem(item: Item): Observable<void> {
  this.items.push(item);
  return of();
}

updateItem(item: Item): Observable<void> {
  const index = this.items.findIndex(i => i.id === item.id);
  if (index !== -1) {
    this.items[index] = item;
  }
  return of();
}

deleteItem(id: number): Observable<void> {
  this.items = this.items.filter(item => item.id !== id);
  return of();
}
}

