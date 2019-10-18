import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../../models/event.model';

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
  @Input()
  event: Event;

  constructor() { }

  ngOnInit() {
  }

}
