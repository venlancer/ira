import { Component, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';
import { FileUploadService } from 'src/app/services/file-upload.service';


@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  eventForm: UntypedFormGroup;
  uploadedImage: File | null = null;
  isSubmitting = false;
  eventDetailsForm: UntypedFormGroup;
  step = 1;  // Track current step
  eventDetailsId: number | null = null;

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

  constructor(private fb: UntypedFormBuilder, private eventService: EventService, private fileUploadService: FileUploadService) {

    this.eventDetailsForm = this.fb.group({
      title: ['', Validators.required],
      event_type: ['', Validators.required],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required],
      organised_by: ['', Validators.required],
      short_desc: ['', Validators.required],
      image: ['']
    });

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

      event_details_id: [3, Validators.required],  // ✅ Ensure correct event details ID

      // Form Arrays
      scientificSessions: this.fb.array([]),
      conferenceSchedule: this.fb.array([]),
      scientificProgram: this.fb.array([]),
      eventPricings: this.fb.array(
        this.participationTypes.map((type) => this.fb.group({
          participation_type: [type, Validators.required], // ✅ Ensure this gets set properly
          early_bird_price: [0, [Validators.required, Validators.min(0)]], // ✅ Default value
          mid_term_price: [0, [Validators.required, Validators.min(0)]],
          late_price: [0, [Validators.required, Validators.min(0)]]
        }))
      )
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.registrationPrices.controls.forEach((control, index) => {
        control.get('early_bird_price')?.setValue(299);
        control.get('mid_term_price')?.setValue(399);
        control.get('late_price')?.setValue(499);
        control.updateValueAndValidity(); // ✅ Force Angular to detect changes
      });

      // console.log("🟢 Updated Form Values:", this.eventForm.value);
    }, 0);
  }

  get scientificSessions(): UntypedFormArray {
    return this.eventForm.get('scientificSessions') as UntypedFormArray;
  }

  get conferenceSchedule(): UntypedFormArray {
    return this.eventForm.get('conferenceSchedule') as UntypedFormArray;
  }

  get registrationPrices(): UntypedFormArray {
    return this.eventForm.get('eventPricings') as UntypedFormArray;
  }

  get scientificProgram(): UntypedFormArray {
    return this.eventForm.get('scientificProgram') as UntypedFormArray;
  }

  // ✅ Create Pricing Form Group for Each Participation Type
  createPricingGroup(): UntypedFormGroup {
    return this.fb.group({
      participation_type: ['', Validators.required],
      early_bird_price: [0, [Validators.required, Validators.min(0)]],
      mid_term_price: [0, [Validators.required, Validators.min(0)]],
      late_price: [0, [Validators.required, Validators.min(0)]]
    });
  }

  // ✅ Add Scientific Session
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

  // ✅ Add Conference Day
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

  // ✅ Handle File Upload
  onFileSelect(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.uploadedImage = file; // ✅ Store file for S3 upload
    }
  }

  submitEventDetails() {
    if (this.eventDetailsForm.invalid) {
      alert("⚠️ Fill all required fields in Event Details.");
      return;
    }

    this.fileUploadService.uploadFile(this.uploadedImage)
      .then((url) => {
        const formData = { ...this.eventDetailsForm.value, image: url };

        this.eventService.createEventDetails(formData).subscribe(response => {
          this.eventDetailsId = response.id;
          this.eventForm.patchValue({ event_details_id: this.eventDetailsId }); // ✅ Auto-fill event details ID
          this.step = 2;  // ✅ Move to Step 2
        }, error => {
          alert("❌ Failed to submit event details.");
        });
      });
  }


  // ✅ Create a Scientific Program Day Group
  createScientificProgramDay(): UntypedFormGroup {
    return this.fb.group({
      day: ['', Validators.required],
      date: ['', Validators.required],
      presentations: this.fb.array([]),
    });
  }

  // ✅ Create a Presentation Group
  createPresentation(): UntypedFormGroup {
    return this.fb.group({
      title: ['', Validators.required],
      type: ['', Validators.required],
      speaker: ['', Validators.required],
      affiliation: ['', Validators.required],
      description: ['', Validators.required],
      speakerImage: ['', Validators.required],
    });
  }

  // ✅ Add Scientific Program Day
  addScientificProgramDay() {
    this.scientificProgram.push(this.createScientificProgramDay());
  }

  removeScientificProgramDay(index: number) {
    this.scientificProgram.removeAt(index);
  }

  addPresentation(dayIndex: number) {
    const day = this.scientificProgram.at(dayIndex) as UntypedFormGroup;
    const presentations = day.get('presentations') as UntypedFormArray;
    presentations.push(this.createPresentation());
  }

  removePresentation(dayIndex: number, presentationIndex: number) {
    const presentations = (this.scientificProgram.at(dayIndex).get('presentations') as UntypedFormArray);
    presentations.removeAt(presentationIndex);
  }

  // ✅ Prepare Data for Hasura API
  prepareEventData(url): any {
    const formValues = this.eventForm.value;

    return {
      event: {
        event_name: formValues.eventName,
        description: formValues.description,
        venue: formValues.venue,
        contact: formValues.contact,
        deadline: formValues.deadline,
        early_bird: formValues.earlyBird,
        mid_term: formValues.midTerm,
        late_term: formValues.lateTerm,
        end_date: formValues.endDate,
        event_image: url,
        event_details_id: formValues.event_details_id,

        scientific_sessions: {
          data: formValues.scientificSessions.map((session: any) => ({
            title: session.title,
            items: session.items // ✅ Ensure this remains a string
          }))
        },

        scientific_programs: {
          data: formValues.scientificProgram.map((program: any) => ({
            day: program.day,
            date: program.date,
            scientific_presentations: {
              data: program.presentations.map((presentation: any) => ({
                title: presentation.title,
                type: presentation.type,
                speaker: presentation.speaker,
                affiliation: presentation.affiliation,
                description: presentation.description,
                speaker_image: presentation.speakerImage
              }))
            }
          }))
        },
        event_pricings: {
          data: this.registrationPrices.controls.map((pricing: UntypedFormGroup) => ({
            participation_type: pricing.get('participation_type')?.value,
            early_bird_price: Number(pricing.get('early_bird_price')?.value) || 0,  // ✅ Ensure it's a number
            mid_term_price: Number(pricing.get('mid_term_price')?.value) || 0,
            late_price: Number(pricing.get('late_price')?.value) || 0
          }))
        }
      }
    };
  }

  // ✅ Handle Form Submission
  onSubmit(): void {
    if (this.step === 1) {
      this.submitEventDetails();
      return;
    }

    if (this.eventForm.invalid) {
      alert("⚠️ Please fill out all required fields.");
      return;
    }

    this.fileUploadService.uploadFile(this.uploadedImage)
      .then((url) => {
        this.isSubmitting = true;
        const eventData = this.prepareEventData(url);

        this.eventService.createEvent(eventData).subscribe(
          (response) => {
            // console.log("✅ Event Created:", response);
            alert("🎉 Event created successfully!");
            this.resetForm();
          },
          (error) => {
            // console.error("🔥 API Error:", error);
            alert("⚠️ Failed to create event.");
            this.isSubmitting = false;
          }
        );
      });
  }

  // ✅ Reset Form
  resetForm() {
    this.eventDetailsForm.reset();
    this.eventForm.reset();
    this.step = 1;  // Reset to Step 1
    this.eventForm.reset();
    this.scientificSessions.clear();
    this.conferenceSchedule.clear();
    this.registrationPrices.clear();
    this.scientificProgram.clear();

    this.addScientificSession();
    this.addDay();
    this.addScientificProgramDay();
    this.participationTypes.forEach(() => this.registrationPrices.push(this.createPricingGroup()));
  }
}
