import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  eventForm: FormGroup;
  uploadedImage: File | null = null;

  constructor(private fb: FormBuilder) {
    this.eventForm = this.fb.group({
      eventName: ['', Validators.required],
      description: ['', Validators.required],
      venue: ['', Validators.required],
      contact: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      deadline: ['', Validators.required],
      scientificSessions: this.fb.array([]),
      conferenceSchedule: this.fb.array([]),
    });
  }

  ngOnInit(): void {
  }

  get scientificSessions() {
    return this.eventForm.get('scientificSessions') as FormArray;
  }

  get conferenceSchedule() {
    return this.eventForm.get('conferenceSchedule') as FormArray;
  }

  addScientificSession() {
    this.scientificSessions.push(
      this.fb.group({
        title: ['', Validators.required],
        items: ['', Validators.required],
      })
    );
  }

  removeScientificSession(index: number) {
    this.scientificSessions.removeAt(index);
  }

  addDay() {
    this.conferenceSchedule.push(
      this.fb.group({
        dayLabel: ['', Validators.required],
        events: this.fb.array([]),
      })
    );
  }

  removeDay(index: number) {
    this.conferenceSchedule.removeAt(index);
  }

  addEvent(dayIndex: number) {
    const day = this.conferenceSchedule.at(dayIndex) as FormGroup;
    const events = day.get('events') as FormArray;
    events.push(
      this.fb.group({
        time: ['', Validators.required],
        title: ['', Validators.required],
        description: ['', Validators.required],
      })
    );
  }

  removeEvent(dayIndex: number, eventIndex: number) {
    const events = (this.conferenceSchedule.at(dayIndex).get('events') as FormArray);
    events.removeAt(eventIndex);
  }

  onFileSelect(event: any) {
    this.uploadedImage = event.target.files[0];
  }

  onSubmit() {
    if (this.eventForm.valid) {
      const formData = this.eventForm.value;
      console.log('Form Data as JSON:', JSON.stringify(formData, null, 2));
      // Additional processing or API submission can go here
    } else {
      alert('Please fill out the form correctly.');
    }
  }

  resetForm() {
    this.eventForm.reset();
    this.scientificSessions.clear();
    this.conferenceSchedule.clear();
    this.addScientificSession(); // Add a default session
    this.addDay(); // Add a default day
  }

}
