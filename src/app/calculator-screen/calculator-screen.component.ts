import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-calculator-screen',
  templateUrl: './calculator-screen.component.html',
  styleUrls: ['./calculator-screen.component.scss']
})
export class CalculatorScreenComponent {
  @Input() displayOutput: string = ''
  @Input() displayPreview: string = ''
  @Input() isLightTheme: boolean = true
}
