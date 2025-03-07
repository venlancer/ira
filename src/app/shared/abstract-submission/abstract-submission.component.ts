import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AbstractService } from 'src/app/services/abstract.service';

@Component({
  selector: 'app-abstract-submission',
  templateUrl: './abstract-submission.component.html',
  styleUrls: ['./abstract-submission.component.scss']
})
export class AbstractSubmissionComponent implements OnInit {
  
  abstractForm: FormGroup;
  file: File | null = null;
  isSubmitting = false;
  fileError:any;

  titles = ['Dr.', 'Mr.', 'Ms.', 'Prof.'];
  countries = ['United States', 'Canada', 'India', 'Germany', 'Australia'];
  categories = ['Research', 'Review', 'Case Study', 'Technical'];

  constructor(private fb: FormBuilder, private abstractService: AbstractService) {
    this.abstractForm = this.fb.group({
      title: ['', Validators.required],
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      country: ['', Validators.required],
      authorsAffiliation: [''],
      contactAddress: ['', Validators.required],
      abstractCategory: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onFileChange(event: any): void {
    this.file = event.target.files[0];
  }

  async onSubmit(): Promise<void> {
    if (this.abstractForm.invalid) {
      alert("Please fill all required fields.");
      return;
    }

    this.isSubmitting = true;

    try {
      let fileBase64 = null;

      if (this.file) {
        fileBase64 = await this.convertFileToBase64(this.file);
      }

      const formData = {
        ...this.abstractForm.value,
        filedata: fileBase64 // Ensure lowercase "filedata" to match Supabase
      };

      console.log("Final FormData before sending:", formData);

      await this.abstractService.insertAbstractData(formData);
      alert("Abstract submitted successfully!");
      this.onReset();
    } catch (error) {
      console.error("Error submitting abstract:", error);
      alert("Failed to submit abstract. Please try again.");
    } finally {
      this.isSubmitting = false;
    }
  }

  onlyNumberKey(event: KeyboardEvent): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
      return false;
    }
    return true;
  }

  onReset(): void {
    this.abstractForm.reset();
    this.file = null;
  }

  async convertFileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        // Remove metadata (data:application/pdf;base64,)
        const base64String = (reader.result as string).split(",")[1];
        resolve(base64String);
      };
      reader.onerror = error => reject(error);
    });
  }
}
