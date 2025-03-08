import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AbstractService } from 'src/app/services/abstract.service';
import { FileUploadService } from 'src/app/services/file-upload.service';

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

  constructor(private fb: FormBuilder, private abstractService: AbstractService, public fileUploadService:FileUploadService) {
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

  onSubmit(): void {
    if (this.abstractForm.invalid) {
      alert("Please fill all required fields.");
      return;
    }
  
    this.isSubmitting = true;
    let fileUrl: string | null = null;
  
    // 1️⃣ Check if a file is selected
    if (this.file) {
      this.fileUploadService.uploadFile(this.file)
        .then((url) => {
          console.log("File uploaded to S3:", url);
          fileUrl = url;
  
          // 2️⃣ Once file is uploaded, prepare form data
          const formData = {
            title: this.abstractForm.value.title,
            full_name: this.abstractForm.value.fullName,
            email: this.abstractForm.value.email,
            phone: this.abstractForm.value.phone,
            country: this.abstractForm.value.country,
            authors_affiliation: this.abstractForm.value.authorsAffiliation,
            contact_address: this.abstractForm.value.contactAddress,
            abstract_category: this.abstractForm.value.abstractCategory,
            file_url: fileUrl // ✅ Send S3 file URL
          };
  
          console.log("Final FormData before sending to Hasura:", formData);
  
          // 3️⃣ Send data to Hasura API
          return this.abstractService.submitAbstract(formData).toPromise();
        })
        .then((response) => {
          console.log("Response from Hasura:", response);
          alert("Abstract submitted successfully!");
          this.onReset();
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Failed to submit abstract. Please try again.");
        })
        .finally(() => {
          this.isSubmitting = false;
        });
    } else {
      // If no file, send form data without file URL
      const formData = {
        title: this.abstractForm.value.title,
        full_name: this.abstractForm.value.fullName,
        email: this.abstractForm.value.email,
        phone: this.abstractForm.value.phone,
        country: this.abstractForm.value.country,
        authors_affiliation: this.abstractForm.value.authorsAffiliation,
        contact_address: this.abstractForm.value.contactAddress,
        abstract_category: this.abstractForm.value.abstractCategory,
        file_url: null // No file uploaded
      };
  
      console.log("Submitting form data without file:", formData);
  
      this.abstractService.submitAbstract(formData).toPromise()
        .then((response) => {
          console.log("Response from Hasura:", response);
          alert("Abstract submitted successfully!");
          this.onReset();
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Failed to submit abstract. Please try again.");
        })
        .finally(() => {
          this.isSubmitting = false;
        });
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
