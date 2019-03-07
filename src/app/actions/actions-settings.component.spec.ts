import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsSettingsComponent } from './actions-settings.component';

describe('ActionsSettingsComponent', () => {
  let component: ActionsSettingsComponent;
  let fixture: ComponentFixture<ActionsSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActionsSettingsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
