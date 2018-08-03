
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { KbeNavComponent } from './kbe-nav.component';

describe('KbeNavComponent', () => {
  let component: KbeNavComponent;
  let fixture: ComponentFixture<KbeNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [KbeNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KbeNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
