import { Component, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { Router } from '@angular/router';
import { ADD_NEW_EVENT } from 'src/app/graphql/queries'; // ✅ Updated Mutation

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  eventForm: UntypedFormGroup;
  uploadedImage: File | null = null;
  isSubmitting: boolean = false;

  // Static Participation Types
  participationTypes: string[] = [
    "Speaker (In-Person)",
    "Delegate (In-Person)",
    "Student/Young Researcher/Poster Presentation (In-Person)",
    "Virtual Presentation (Online through ZOOM)",
    "Exhibition Sponsor",
    "Package A (Registration + two nights accommodation)",
    "Package B (Registration + three nights accommodation)"
  ];

  constructor(private fb: UntypedFormBuilder, private apollo: Apollo, private router: Router) {
    this.eventForm = this.fb.group({
      eventName: ['', Validators.required],
      description: ['', Validators.required],
      venue: ['', Validators.required],
      contact: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      deadline: ['', Validators.required],

      // Registration Dates
      earlyBird: ['', Validators.required],
      midTerm: ['', Validators.required],
      lateTerm: ['', Validators.required],
      endDate: ['', Validators.required],

      scientificSessions: this.fb.array([]),
      conferenceSchedule: this.fb.array([]),

      // Pricing Form Array (Mapped to Participation Types)
      registrationPrices: this.fb.array(
        this.participationTypes.map(() => this.createPricingGroup())
      )
    });
  }

  ngOnInit(): void {}

  get scientificSessions() {
    return this.eventForm.get('scientificSessions') as UntypedFormArray;
  }

  get conferenceSchedule() {
    return this.eventForm.get('conferenceSchedule') as UntypedFormArray;
  }

  get registrationPrices() {
    return this.eventForm.get('registrationPrices') as UntypedFormArray;
  }

  // Create Pricing Form Group for Each Participation Type
  createPricingGroup(): UntypedFormGroup {
    return this.fb.group({
      earlyBirdPrice: [0, [Validators.required, Validators.min(0)]],
      midTermPrice: [0, [Validators.required, Validators.min(0)]],
      latePrice: [0, [Validators.required, Validators.min(0)]]
    });
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
    const day = this.conferenceSchedule.at(dayIndex) as UntypedFormGroup;
    const events = day.get('events') as UntypedFormArray;
    events.push(
      this.fb.group({
        time: ['', Validators.required],
        title: ['', Validators.required],
        description: ['', Validators.required],
      })
    );
  }

  removeEvent(dayIndex: number, eventIndex: number) {
    const events = (this.conferenceSchedule.at(dayIndex).get('events') as UntypedFormArray);
    events.removeAt(eventIndex);
  }

  onFileSelect(event: any) {
    this.uploadedImage = event.target.files[0];
  }

  onSubmit() {
    if (this.eventForm.invalid) {
        alert("⚠️ Please fill out all required fields.");
        return;
    }

    this.isSubmitting = true;
    
    const formValues = this.eventForm.value;

    try {
        const formatDate = (dateString: string) => dateString 
            ? new Date(dateString).toISOString().split('T')[0] 
            : null;

        // **🚀 Ensure all required fields are included**
        const newEvent = {
            event_name: formValues.eventName || "Untitled Event", // Required
            deadline: formatDate(formValues.deadline) || formatDate(new Date().toISOString()), // Required

            // Optional Fields
            venue: formValues.venue || null, 
            description: formValues.description || null, 
            contact: formValues.contact || null,
            event_image: this.uploadedImage ? this.uploadedImage.name : null,

            // **JSON fields must be sent as objects, NOT strings**
            scientific_sessions: formValues.scientificSessions.length > 0 
                ? formValues.scientificSessions.map((session: any) => ({
                    title: session.title,
                    items: session.items.split(',').map((item: string) => item.trim()).filter(Boolean)
                }))
                : [], // Empty array if no sessions

            conference_schedule: formValues.conferenceSchedule.length > 0 
                ? formValues.conferenceSchedule.map((day: any) => ({
                    dayLabel: day.dayLabel,
                    events: day.events.map((event: any) => ({
                        time: event.time,
                        title: event.title,
                        description: event.description
                    }))
                }))
                : [], // Empty array if no schedule

            registration_prices: formValues.registrationPrices.length > 0 
                ? formValues.registrationPrices.map((price: any, index: number) => ({
                    type: this.participationTypes[index], // Match type from static array
                    early: price.early ?? 0, // Ensure number is not null
                    mid: price.mid ?? 0, // Ensure number is not null
                    late: price.late ?? 0 // Ensure number is not null
                }))
                : [], // Empty array if no pricing

            early_bird: formatDate(formValues.earlyBird) || null,
            mid_term: formatDate(formValues.midTerm) || null,
            late_term: formatDate(formValues.lateTerm) || null,
            end_date: formatDate(formValues.endDate) || null,
        };

        console.log("📌 Event Data Before Mutation:", newEvent);

        // **🚀 Execute GraphQL Mutation**
        this.apollo.mutate({
            mutation: ADD_NEW_EVENT,
            variables: { objects: [newEvent] }
        }).subscribe(
            (result: any) => {
                console.log("✅ Mutation Result:", result);
                alert("🎉 Event created successfully!");
                this.router.navigate(['/events']);
            },
            (error) => {
                console.error("🔥 Mutation Error:", error);
                alert("⚠️ Failed to save event. Please try again.");
            }
        );
    } catch (error) {
        console.error("🔥 Unexpected Error:", error);
        alert("⚠️ Unexpected error occurred.");
    } finally {
        this.isSubmitting = false;
    }
}



  // **✅ Reset Form Functionality**
  resetForm() {
    this.eventForm.reset();
    this.scientificSessions.clear();
    this.conferenceSchedule.clear();
    this.registrationPrices.clear();

    // Reinitialize sections
    this.addScientificSession(); 
    this.addDay(); 
    this.participationTypes.forEach(() => this.registrationPrices.push(this.createPricingGroup()));
  }
}
