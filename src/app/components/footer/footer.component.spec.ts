import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a statement for ICO responsibility', () => {
    const responsibilityStatementElement: DebugElement = fixture.debugElement.query(By.css('.ico-responsibility'));

    expect(responsibilityStatementElement.nativeElement.innerHTML)
      .toContain('Yukarıda ismi geçen firma ya da projelerden Codefiction ya da bu projenin bakımını yapan' +
      ' kişiler "kesinlikle" sorumlu değildir.');
  });
});
