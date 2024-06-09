import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-calculator-header',
  templateUrl: './calculator-header.component.html',
  styleUrls: ['./calculator-header.component.scss']
})
export class CalculatorHeaderComponent {
  @Output() toggleThemeEvent = new EventEmitter<boolean>()
  @Input() isLightTheme: boolean = true

  toggleTheme (): void {
    this.toggleThemeEvent.emit()
  }
}
