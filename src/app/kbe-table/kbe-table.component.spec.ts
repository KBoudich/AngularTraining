
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { KbeTableComponent } from './kbe-table.component';

describe('KbeTableComponent', () => {
  let component: KbeTableComponent;
  let fixture: ComponentFixture<KbeTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ KbeTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KbeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
