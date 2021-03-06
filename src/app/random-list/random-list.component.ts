import { ListItem } from '../list-generator';
import { Component, EventEmitter, Input, Output } from '@angular/core';

const fibonacci = (num: number): number => {
  if (num === 1 || num === 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
};

@Component({
  selector: 'app-random-list',
  templateUrl: './random-list.component.html',
  styleUrls: ['./random-list.component.css']
})
export class RandomListComponent {

  public label: string;

  @Input()
  public listItems: ListItem[];

  @Output()
  private addItem: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  private removeItem: EventEmitter<ListItem> = new EventEmitter<ListItem>();

  public onKeyDown(event: KeyboardEvent): void {
    if (event.keyCode === 13) {
      this.addItem.emit(this.label);
      this.label = undefined;
    }
  }

  public onClickRemoveItem(item: ListItem): void {
    this.removeItem.emit(item);
  }

  public calculate(num: number): number {
    console.log('Calculating...');
    return fibonacci(num);
  }

}
