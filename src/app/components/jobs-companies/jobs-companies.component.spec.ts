import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsCompaniesComponent } from './jobs-companies.component';

describe('JobsCompaniesComponent', () => {
  let component: JobsCompaniesComponent;
  let fixture: ComponentFixture<JobsCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobsCompaniesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobsCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
