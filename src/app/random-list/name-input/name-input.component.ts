import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.css']
})
export class NameInputComponent {
  public label: string;

  @Output() private addItem: EventEmitter<string> = new EventEmitter<string>();

  public onKeyDown(event: KeyboardEvent): void {
    if (event.keyCode === 13) {
      this.addItem.emit(this.label);
      this.label = undefined;
    }
  }
}
