import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchUserDataComponent } from './fetch-user-data.component';

describe('FetchUserDataComponent', () => {
  let component: FetchUserDataComponent;
  let fixture: ComponentFixture<FetchUserDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchUserDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchUserDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
