import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
  }));

  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should have banner', async(() => {
    const bannerElement = fixture.debugElement.query(By.css('ico-banner'));
    expect(bannerElement).toBeTruthy();
  }));

  it('should have main section', async(() => {
    const mainElement = fixture.debugElement.query(By.css('ico-main'));
    expect(mainElement).toBeTruthy();
  }));

  it('should have footer section', async(() => {
    const footerElement = fixture.debugElement.query(By.css('ico-footer'));
    expect(footerElement).toBeTruthy();
  }));
});
