import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
items: Item[] = [];

ngOnInit(): void {
  this.itemService.getAllItems().subscribe(items => this.items = items);
  }
}

export interface item {
  id: number;
  nome: string;
  email: string;
}