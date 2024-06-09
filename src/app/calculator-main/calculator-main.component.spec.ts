import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CalculatorMainComponent } from './calculator-main.component'

describe('CalculatorMainComponent', () => {
  let component: CalculatorMainComponent
  let fixture: ComponentFixture<CalculatorMainComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorMainComponent]
    })
    fixture = TestBed.createComponent(CalculatorMainComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
