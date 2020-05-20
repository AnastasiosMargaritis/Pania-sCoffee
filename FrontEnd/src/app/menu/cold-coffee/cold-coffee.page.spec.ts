import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ColdCoffeePage } from './cold-coffee.page';

describe('ColdCoffeePage', () => {
  let component: ColdCoffeePage;
  let fixture: ComponentFixture<ColdCoffeePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColdCoffeePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ColdCoffeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
