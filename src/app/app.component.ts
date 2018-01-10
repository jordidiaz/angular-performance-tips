import { Component, OnInit } from '@angular/core';

import { ListGenerator, ListItem } from './list-generator';
import { Names } from './names';

const NumRange: [number, number] = [23, 28];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public list1Items: ListItem[];
  public list2Items: ListItem[];

  constructor(private generator: ListGenerator) {}

  public onAddItemToList1(label: string): void {
    this.list1Items.unshift({
      label: label,
      num: this.generator.generateNumber(NumRange)
    });
  }

  public onAddItemToList2(label: string): void {
    this.list2Items.unshift({
      label: label,
      num: this.generator.generateNumber(NumRange)
    });
  }

  public onRemoveItemFromList1(item: ListItem): void {
    this.list1Items.splice(this.list1Items.indexOf(item), 1);
  }

  public onRemoveItemFromList2(item: ListItem): void {
    this.list1Items.splice(this.list1Items.indexOf(item), 1);
  }

  public ngOnInit(): void {
    this.list1Items = this.generator.generate(Names, NumRange, 140);
    this.list2Items = this.generator.generate(Names, NumRange, 140);
  }
}
