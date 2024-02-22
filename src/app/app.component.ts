import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator-app'

  displayOutput: string = '0'
  displayPreview: string = ''
  isLightTheme: boolean = false

  updateDisplay (button: any): void {
    switch (button) {
      case 'DEL': {
        this.displayOutput = this.displayOutput.slice(0, -1)
        if (this.displayOutput === '0' || this.displayOutput.length === 0) {
          this.displayOutput = '0'
          this.displayOutput = this.displayPreview
        }
        break
      }
      case '.': {
        if (this.displayOutput.includes('.')) {
          this.displayOutput = this.displayOutput
        } else if (this.displayOutput[this.displayOutput.length - 1] !== '.') {
          this.displayOutput += button
        } else;
        break
      }
      case 'RESET': {
        this.displayOutput = '0'
        this.displayPreview = ''
        break
      }
      case '=': {
        this.displayOutput = eval(this.displayOutput).toString()
        this.displayPreview = this.displayOutput
        break
      }
      case '0': {
        if (this.displayOutput.length === 1 && this.displayOutput[this.displayOutput.length - 1] === '0') {
          this.displayOutput = button
        } else {
          this.displayOutput += button
        }
        break
      }
      case '+':
      case '-':
      case '*':
      case '/': {
        this.displayOutput += button
        break
      }
      default: {
        if (this.displayOutput === '0') {
          this.displayOutput = button
        } else {
          this.displayOutput += button
        }
      }
    }
  }

  toggleTheme (): void {
    this.isLightTheme = !this.isLightTheme
  }
}
