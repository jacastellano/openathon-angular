import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ProfileComponent } from './profile.component';
import { User } from '../models/user.model';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      providers: [
        HttpClient,
        HttpHandler,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    const user: User = { id: '0', email: 'user', password: '**' };
    localStorage.setItem('user', JSON.stringify(user));
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
