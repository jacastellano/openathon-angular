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
   * Material table columns definition
   */
  displayedColumns: string[] = ['date', 'location', 'title'];

  constructor(
    private eventService: EventService,
  ) { }

  ngOnInit() {
    this.getEvents();
  }

  /**
   * Rescue event from service
   */
  getEvents() {
    this.eventService.getEvents().subscribe((events: Event[]) => {
      this.events = events;
    });
  }

}
