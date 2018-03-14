import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { List } from 'immutable';

import { ListItem } from '../../list-generator';

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
}
