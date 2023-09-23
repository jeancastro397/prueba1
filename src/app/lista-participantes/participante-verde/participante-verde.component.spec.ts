import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParticipanteVerdeComponent } from './participante-verde.component';

describe('ParticipanteVerdeComponent', () => {
  let component: ParticipanteVerdeComponent;
  let fixture: ComponentFixture<ParticipanteVerdeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipanteVerdeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParticipanteVerdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
