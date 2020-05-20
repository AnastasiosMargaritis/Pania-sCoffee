import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SnacksPage } from './snacks.page';

describe('SnacksPage', () => {
  let component: SnacksPage;
  let fixture: ComponentFixture<SnacksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnacksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SnacksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
