import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../../models/event.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/core/event.service';

/**
 * Event detail page
 */
@Component({
  selector: 'oevents-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  /**
   * Event data to show in component
   */
  event: Event = {
    id: '',
    date: null,
    title: '',
    description: '',
    location: '',
    addedBy: '',
  };

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.eventService.getEvent(id).subscribe((event: Event) => {
      console.log(event);
      this.event = event;
    });
  }

  /**
   * Delete event
   * @param event Selected event
   */
  deleteEvent(event: Event) {
    console.log(event);
    this.eventService.deleteEvent(event.id).subscribe(() => {
      console.log('Event Removed');
    });
    this.router.navigate(['/events']);
  }

}
