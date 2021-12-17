import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import {RouterTestingModule} from "@angular/router/testing";

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [IonicModule.forRoot(), RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('logout button', () => {
    let button: HTMLIonButtonElement;
    beforeEach(() => {
      button = fixture.nativeElement.querySelector('[test="logout-button"]');     
      fixture.detectChanges();
      // tick();
    });
    it('calls handeLogin on click', fakeAsync(() => {
      const loginSpy = spyOn(component, 'handleLogout');
      button.click()
      tick()
      expect(loginSpy).toHaveBeenCalledTimes(1);
    }))
  })
});
