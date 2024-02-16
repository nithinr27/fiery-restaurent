import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexterComponent } from './texter.component';

describe('TexterComponent', () => {
  let component: TexterComponent;
  let fixture: ComponentFixture<TexterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TexterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TexterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
