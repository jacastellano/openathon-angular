import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/event.model';
import { EventService } from '../../core/event.service';

/**
 * Event list page
 */
@Component({
  selector: 'oevents-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  /**
   * Event collection
   */
  events: Event[];

  /**
   * Current selected event
   */
  selectedEvent: Event;

  constructor(
    private eventService: EventService,
  ) { }

  ngOnInit() {
    this.getEvents();
  }

  /**
   * Execute when click on menu
   * @param event received event
   */
  onSelectEvent(event: Event) {
    this.selectedEvent = event;
  }

  /**
   * Rescue event from service
   */
  getEvents() {
    this.eventService.getEvents().subscribe((events: Event[]) => {
      this.events = events;
      this.selectedEvent = events[0];
    });
  }

}
