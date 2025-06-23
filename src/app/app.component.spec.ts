import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { HeaderComponent } from './shared/components/header/header.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: '',
  standalone: true,
})
class FakeHeaderComponent {}
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
    TestBed.overrideComponent(AppComponent, {
      remove: {
        imports: [HeaderComponent],
      },
      add: {
        imports: [FakeHeaderComponent],
      },
    });
  });

  it('deve renderizar o component header', () => {
    const fixture = TestBed.createComponent(AppComponent);

    const headerDebugEl = fixture.debugElement.query(By.css('app-header'));

    expect(headerDebugEl).toBeTruthy();
  });
  it('deve renderizar o component router-outlet', () => {
    const fixture = TestBed.createComponent(AppComponent);

    const routerOutletDebugEl = fixture.debugElement.query(
      By.css('router-outlet')
    );

    expect(routerOutletDebugEl).toBeTruthy();
  });
});
