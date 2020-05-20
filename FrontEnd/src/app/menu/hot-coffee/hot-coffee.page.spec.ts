import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HotCoffeePage } from './hot-coffee.page';

describe('HotCoffeePage', () => {
  let component: HotCoffeePage;
  let fixture: ComponentFixture<HotCoffeePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotCoffeePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HotCoffeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
