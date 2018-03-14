import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { List } from 'immutable';

import { ListItem } from '../../list-generator';

const fibonacci = (num: number): number => {
  if (num === 1 || num === 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
};

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  @Input() public listItems: List<ListItem>;
  @Output() private removeItem: EventEmitter<ListItem> = new EventEmitter<ListItem>();

  public onClickRemoveItem(item: ListItem): void {
    this.removeItem.emit(item);
  }

  public calculate(num: number): number {
    console.log('Calculating...');
    return fibonacci(num);
  }
}
