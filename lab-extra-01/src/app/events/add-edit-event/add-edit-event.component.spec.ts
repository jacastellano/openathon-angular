import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../shared/shared.module';
import { AddEditEventComponent } from './add-edit-event.component';

describe('AddEditEventComponent', () => {
  let component: AddEditEventComponent;
  let fixture: ComponentFixture<AddEditEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditEventComponent],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        SharedModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
