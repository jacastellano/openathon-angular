import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Event } from '../../models/event.model';
import { EventService } from 'src/app/core/event.service';

/**
 * Add & Edit Form
 */
@Component({
  selector: 'oevents-add-edit-event',
  templateUrl: './add-edit-event.component.html',
  styleUrls: ['./add-edit-event.component.scss']
})
export class AddEditEventComponent implements OnInit {

  /**
   * Event to edit
   */
  event: Event;

  /**
   * form group
   */
  addEditForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private eventService: EventService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.eventService.getEvent(id).subscribe((event: Event) => {
        console.log(event);
        this.event = event;
        this.createForm();
      });
    } else {
      this.createForm();
    }
  }

  /**
   * Aux method to create form
   */
  createForm() {
    if (this.event) {
      this.addEditForm = this.fb.group({
        title: this.event.title,
        location: this.event.location,
        date: this.event.date,
        description: this.event.description,
        addedBy: this.event.addedBy,
        id: this.event.id
      });
    } else {
      this.addEditForm = this.fb.group({
        title: '',
        location: '',
        date: '',
        description: '',
        addedBy: '',
        id: ''
      });
    }
  }

  /**
   * Create o Update event action
   */
  onSubmit() {
    this.event = this.addEditForm.value;
    if (this.event.id) {
      this.eventService.updateEvent(this.event).subscribe((event: Event) => {
        console.log(event);
        this.navigate();
      });
    } else {
      this.eventService.addEvent(this.event).subscribe((event: Event) => {
        console.log(event);
        this.navigate();
      });
    }
  }

  /**
   * Navigate tu event list
   */
  private navigate() {
    this.addEditForm.reset();
    this.router.navigate(['/events']);
  }

}
