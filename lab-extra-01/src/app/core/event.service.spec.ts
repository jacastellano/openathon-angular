import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { EventService } from './event.service';

describe('EventService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: EventService = TestBed.get(EventService);
    expect(service).toBeTruthy();
  });
});
