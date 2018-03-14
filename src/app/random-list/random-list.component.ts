import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { List } from 'immutable';

import { ListItem } from '../list-generator';

@Component({
  selector: 'app-random-list',
  templateUrl: './random-list.component.html',
  styleUrls: ['./random-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RandomListComponent {
  @Input() public listItems: List<ListItem>;
  @Output() public removeItem: EventEmitter<ListItem> = new EventEmitter<ListItem>();
  @Output() public addItem: EventEmitter<string> = new EventEmitter<string>();

  public onRemoveItem(item: ListItem): void {
    this.removeItem.emit(item);
  }

  public onAddItem(item: string): void {
    this.addItem.emit(item);
  }
}
