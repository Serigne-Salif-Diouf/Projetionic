import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsPage } from './tabs.page';
import { IonicModule } from '@ionic/angular';

describe('TabsPage', () => {
  let component: TabsPage;
  let fixture: ComponentFixture<TabsPage>;

  beforeEach(async() => {

    await TestBed.configureTestingModule({
      declarations:[TabsPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
