import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkMeComponent } from './work-me.component';

describe('WorkMeComponent', () => {
  let component: WorkMeComponent;
  let fixture: ComponentFixture<WorkMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkMeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
