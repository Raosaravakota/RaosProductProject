import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewViedoGallaryComponent } from './view-viedo-gallary.component';

describe('ViewViedoGallaryComponent', () => {
  let component: ViewViedoGallaryComponent;
  let fixture: ComponentFixture<ViewViedoGallaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewViedoGallaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewViedoGallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
