import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import {RouterTestingModule} from "@angular/router/testing";

import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  beforeEach(waitForAsync(() => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers:[
        {provide: Router, useValue: routerSpy}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('login button', () => {
    let button: HTMLIonButtonElement;
    beforeEach(fakeAsync(() => {
      button = fixture.nativeElement.querySelector('[test="login-button"]');
      
      fixture.detectChanges();
      tick();

    }));
    it('navigates to home on click', () => {
      const loginSpy = spyOn(component, 'handleLogin');
      click(button);
      expect(loginSpy).toHaveBeenCalledTimes(1);
    })
  })
  
const click = (button: HTMLElement) => {
  const event = new Event('click');
  button.dispatchEvent(event);
  fixture.detectChanges();
};
});
