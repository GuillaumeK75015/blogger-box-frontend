import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostNewFormComponent } from './post-new-form.component';

describe('PostNewFormComponent', () => {
  let component: PostNewFormComponent;
  let fixture: ComponentFixture<PostNewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostNewFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
