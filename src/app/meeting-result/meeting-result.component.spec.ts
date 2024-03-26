import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeetingResultComponent } from './meeting-result.component';

describe('MeetingResultComponent', () => {
  let component: MeetingResultComponent;
  let fixture: ComponentFixture<MeetingResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeetingResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeetingResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
