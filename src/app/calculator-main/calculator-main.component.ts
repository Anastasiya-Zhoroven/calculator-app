import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-calculator-main',
  templateUrl: './calculator-main.component.html',
  styleUrls: ['./calculator-main.component.scss']
})
export class CalculatorMainComponent {
  buttons: { top: string[], bottom: string[] } = {
    top: [
      '7',
      '8',
      '9',
      'DEL',
      '4',
      '5',
      '6',
      '+',
      '1',
      '2',
      '3',
      '-',
      '.',
      '0',
      '/',
      '*'
    ],
    bottom: [
      'RESET',
      '='
    ]
  }

  @Input() isLightTheme: boolean = true
  @Output() buttonClicked = new EventEmitter<string>()

  buttonClickHandler (button: string): void {
    this.buttonClicked.emit(button)
  }
}
