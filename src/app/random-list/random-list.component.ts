import { ListItem } from '../list-generator';
import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-random-list',
  templateUrl: './random-list.component.html',
  styleUrls: ['./random-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RandomListComponent {
  @Input() public listItems: ListItem[];
  @Output() public removeItem: EventEmitter<ListItem> = new EventEmitter<ListItem>();
  @Output() public addItem: EventEmitter<string> = new EventEmitter<string>();

  public onRemoveItem(item: ListItem): void {
    this.removeItem.emit(item);
  }

  public onAddItem(item: string): void {
    this.addItem.emit(item);
  }
}
