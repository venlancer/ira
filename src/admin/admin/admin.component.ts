import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  data = [
    { title: 'Brochure', entries: 23, type: 'brochure' },
    { title: 'Abstract', entries: 11, type: 'abstract' },
    { title: 'Registration', entries: 17, type: 'registration' },
  ];

  brocherData = [
    {
      "Date": "2024-11-18",
      "Title": "Dr.",
      "Fullname": "Tania Tayah",
      "Email": "taniatfayah@gmail.com",
      "MobileNo": "971555553901",
      "Country": "United Arab Emirates",
      "Affiliation": "SAH",
      "Address": "DHCC"
    },
    {
      "Date": "2024-08-31",
      "Title": "Mr.",
      "Fullname": "Satya",
      "Email": "satyasriragu.30@gmail.com",
      "MobileNo": "95154322",
      "Country": "Afghanistan",
      "Affiliation": "Professor",
      "Address": ""
    },
    {
      "Date": "2024-07-25",
      "Title": "Ms.",
      "Fullname": "Ann Marie O’Connor",
      "Email": "pace_ann@yahoo.ca",
      "MobileNo": "+1 07802395674",
      "Country": "Canada",
      "Affiliation": "Speaker",
      "Address": "106 4th ave e Oyen, Alberta Canada"
    },
    {
      "Date": "2024-06-08",
      "Title": "Ms.",
      "Fullname": "India",
      "Email": "iraconferences@gmail.com",
      "MobileNo": "09515437406",
      "Country": "India",
      "Affiliation": "Professor",
      "Address": "4th floor, Plot No:-9, Ganeshwari Estates, Nizampet Rd, beside sangamitra school, Hyderabad, Telangana 500090"
    },
    {
      "Date": "2023-10-17",
      "Title": "Mrs.",
      "Fullname": "Rahul",
      "Email": "rahul@gmail.com",
      "MobileNo": "9999999999",
      "Country": "Aland Islands",
      "Affiliation": "Same",
      "Address": "same@gmail.com"
    },
    {
      "Date": "2023-10-15",
      "Title": "Mr.",
      "Fullname": "David Galea",
      "Email": "dgalea@beatconsult.com",
      "MobileNo": "79896337",
      "Country": "Malta",
      "Affiliation": "MIA",
      "Address": ""
    },
    {
      "Date": "2023-10-11",
      "Title": "Dr.",
      "Fullname": "Rao",
      "Email": "rao.tiio899@yahoo.com",
      "MobileNo": "9999999999",
      "Country": "Antarctica",
      "Affiliation": "Professor",
      "Address": "Same to same"
    },
    {
      "Date": "2023-10-11",
      "Title": "Mr.",
      "Fullname": "Mahesh",
      "Email": "mahesh@wcube.in",
      "MobileNo": "8801008829",
      "Country": "India",
      "Affiliation": "Nn",
      "Address": "Plot no 40, Road 4 Sai nagar , allwyn colony"
    },
    {
      "Date": "2023-10-11",
      "Title": "Ms.",
      "Fullname": "Satya",
      "Email": "satyasriragu.30@gmail.com",
      "MobileNo": "+918886431401",
      "Country": "Australia",
      "Affiliation": "Professor",
      "Address": "Amruthasai Residency Nizampet Hyderabad"
    },
    {
      "Date": "2023-10-11",
      "Title": "Mr.",
      "Fullname": "Satyasri",
      "Email": "satyasri.788@gmail.com",
      "MobileNo": "9999999999",
      "Country": "Angola",
      "Affiliation": "Professor",
      "Address": "Same"
    }
  ]
  abstractData = [
    {
      "Date": "2024-09-03",
      "Title": "Prof.",
      "Fullname": "Bankole Johnson",
      "Email": "paula.bmandrade@gmail.com",
      "Mobileno": "+1 (434)4667578",
      "Country": "United States",
      "Affiliation": "Casa Privée and Larkin University",
      "Address": "1395 Brickell Avenue, Suite 200?Miami, FL 33131",
      "Category": "Oral",
      "File": "download"
    },
    {
      "Date": "2024-09-03",
      "Title": "Prof.",
      "Fullname": "Bankole Johnson",
      "Email": "kolej@me.com",
      "Mobileno": "+1 (434) 466-7578",
      "Country": "United States",
      "Affiliation": "Casa Privée and Larkin University",
      "Address": "1395 Brickell Ave, Suite 200, Miami, FL 33131",
      "Category": "Oral",
      "File": "download"
    },
    {
      "Date": "2024-07-16",
      "Title": "Ms.",
      "Fullname": "Ann Marie O’Connor",
      "Email": "pace_ann@yahoo.ca",
      "Mobileno": "+1 07802395674",
      "Country": "Canada",
      "Affiliation": "International Voice for Epilepsy",
      "Address": "PO Box 785 Oyen Alberta, Canada T0J2J0",
      "Category": "Oral",
      "File": "download"
    },
    {
      "Date": "2024-06-22",
      "Title": "Prof.",
      "Fullname": "ZHENH5UAN LIU",
      "Email": "lzh195842@163.com",
      "Mobileno": "13923185885",
      "Country": "China",
      "Affiliation": "Nanhai Affiliated Hospital for Women and Children Guangzhou University Chinese Medicine",
      "Address": "No.12, Guiping Road Guicheng Nanhai City, Guangdong",
      "Category": "Oral",
      "File": "download"
    },
    {
      "Date": "2023-11-17",
      "Title": "Dr.",
      "Fullname": "Emina Karamhet Sher",
      "Email": "emina.karamhet@gmail.com",
      "Mobileno": "+447403991279",
      "Country": "United Kingdom",
      "Affiliation": "International Society of Engineering Science and Technology",
      "Address": "33 The Glen",
      "Category": "Electronic Poster",
      "File": "download"
    },
    {
      "Date": "2023-07-06",
      "Title": "Dr.",
      "Fullname": "Rahul Hajare",
      "Email": "rahulhajare17@gmail.com",
      "Mobileno": "+919921707584",
      "Country": "India",
      "Affiliation": "Raisoni University Amravati",
      "Address": "Delhi",
      "Category": "Oral",
      "File": "download"
    },
    {
      "Date": "2023-06-22",
      "Title": "Dr.",
      "Fullname": "Tarit Kanti Ghosh",
      "Email": "tarit12@gmail.com",
      "Mobileno": "8801711313372",
      "Country": "Bangladesh",
      "Affiliation": "Khulna Medical College Hospital",
      "Address": "9/3 Gagan Babu Road, Khulna",
      "Category": "Video presentation",
      "File": "download"
    },
    {
      "Date": "2023-06-11",
      "Title": "Dr.",
      "Fullname": "GHAZI AHMAD DARADKEH",
      "Email": "drghazidaradkeh@gmail.com",
      "Mobileno": "66265246",
      "Country": "Qatar",
      "Affiliation": "HAMAD MEDICAL CORPORATION",
      "Address": "QATAR - HAMAD MEDICAL CORPORATION P.O.BOX 3050 AKHOR HOSPITAL",
      "Category": "Oral",
      "File": "download"
    },
    {
      "Date": "2023-05-24",
      "Title": "Dr.",
      "Fullname": "Isham Alzoubi",
      "Email": "alzoubi@ut.ac.ir",
      "Mobileno": "00963940188041",
      "Country": "Syria",
      "Affiliation": "",
      "Address": "Daraa",
      "Category": "Oral",
      "File": "download"
    },
    {
      "Date": "2023-05-23",
      "Title": "Dr.",
      "Fullname": "Shashidhar",
      "Email": "shashi@wcube.in",
      "Mobileno": "8143132124",
      "Country": "India",
      "Affiliation": "cc",
      "Address": "Kp",
      "Category": "Poster",
      "File": "download"
    }
  ]
  registrationData = [
    {
      "S.No": 1,
      "Payment Status": "pending",
      "Title": "Ms.",
      "Full Name": "ANN O'CONNOR",
      "Company Name": "Ann Marie O'Connor",
      "City": "",
      "State": "",
      "Country": "Canada",
      "Phone": "7802395674",
      "Contact Address": "pace_ann@yahoo.ca",
      "Email": "pace_ann@yahoo.ca",
      "Abstract Category": "",
      "Registration type": "",
      "Package Name": "",
      "Package Amount": 0,
      "Subpackage Name": "",
      "Subpackage Amount": 0,
      "Total": 0,
      "Date & Time": "2024-07-25 10:42:38"
    },
    {
      "S.No": 2,
      "Payment Status": "pending",
      "Title": "Mr.",
      "Full Name": "Satya sri",
      "Company Name": "Ira conferences",
      "City": "",
      "State": "",
      "Country": "India",
      "Phone": "9515437406",
      "Contact Address": "satyasriragu.30@gmail.com",
      "Email": "satyasriragu.30@gmail.com",
      "Abstract Category": "",
      "Registration type": "",
      "Package Name": "",
      "Package Amount": 0,
      "Subpackage Name": "",
      "Subpackage Amount": 0,
      "Total": 0,
      "Date & Time": "2024-07-23 21:11:49"
    },
    {
      "S.No": 3,
      "Payment Status": "pending",
      "Title": "Ms.",
      "Full Name": "Ann Marie O'Connor",
      "Company Name": "A Voice for Epilepsy",
      "City": "",
      "State": "",
      "Country": "Canada",
      "Phone": "7802395674",
      "Contact Address": "pace_ann@yahoo.ca",
      "Email": "pace_ann@yahoo.ca",
      "Abstract Category": "",
      "Registration type": "",
      "Package Name": "",
      "Package Amount": 0,
      "Subpackage Name": "",
      "Subpackage Amount": 0,
      "Total": 0,
      "Date & Time": "2024-07-23 20:50:20"
    },
    {
      "S.No": 4,
      "Payment Status": "pending",
      "Title": "Ms.",
      "Full Name": "Ann Marie O'Connor",
      "Company Name": "Epilepsy Advocate for Canada",
      "City": "",
      "State": "",
      "Country": "Canada",
      "Phone": "7802395674",
      "Contact Address": "pace_ann@yahoo.ca",
      "Email": "pace_ann@yahoo.ca",
      "Abstract Category": "",
      "Registration type": "",
      "Package Name": "",
      "Package Amount": 0,
      "Subpackage Name": "",
      "Subpackage Amount": 0,
      "Total": 0,
      "Date & Time": "2024-07-23 20:43:16"
    },
    {
      "S.No": 5,
      "Payment Status": "pending",
      "Title": "Mr.",
      "Full Name": "subbu",
      "Company Name": "gadbcscasaz",
      "City": "",
      "State": "",
      "Country": "Austria",
      "Phone": "+91 8657812039",
      "Contact Address": "subbua@gmail.com",
      "Email": "subbua@gmail.com",
      "Abstract Category": "",
      "Registration type": "",
      "Package Name": "",
      "Package Amount": 0,
      "Subpackage Name": "",
      "Subpackage Amount": 0,
      "Total": 0,
      "Date & Time": "2024-06-02 03:59:21"
    },
    {
      "S.No": 6,
      "Payment Status": "pending",
      "Title": "Mr.",
      "Full Name": "satyasri ragu",
      "Company Name": "Ira",
      "City": "",
      "State": "",
      "Country": "India",
      "Phone": "+918886431401",
      "Contact Address": "satyasri.ragu@gmail.com",
      "Email": "satyasri.ragu@gmail.com",
      "Abstract Category": "",
      "Registration type": "",
      "Package Name": "",
      "Package Amount": 0,
      "Subpackage Name": "",
      "Subpackage Amount": 0,
      "Total": 0,
      "Date & Time": "2024-03-07 09:14:18"
    },
    {
      "S.No": 7,
      "Payment Status": "pending",
      "Title": "Mr.",
      "Full Name": "Ben Clench",
      "Company Name": "N/A",
      "City": "",
      "State": "",
      "Country": "United Kingdom",
      "Phone": "+44 7738 094 608",
      "Contact Address": "bfclench@gmail.com",
      "Email": "bfclench@gmail.com",
      "Abstract Category": "",
      "Registration type": "",
      "Package Name": "",
      "Package Amount": 0,
      "Subpackage Name": "",
      "Subpackage Amount": 0,
      "Total": 0,
      "Date & Time": "2024-03-05 14:56:40"
    },
    {
      "S.No": 8,
      "Payment Status": "pending",
      "Title": "Mr.",
      "Full Name": "Subbarayan Ragu",
      "Company Name": "IRA GROUP",
      "City": "",
      "State": "",
      "Country": "India",
      "Phone": "09515437406",
      "Contact Address": "iraconferences@gmail.com",
      "Email": "iraconferences@gmail.com",
      "Abstract Category": "Speaker (In-person)",
      "Registration type": "",
      "Package Name": "",
      "Package Amount": 599,
      "Subpackage Name": "",
      "Subpackage Amount": 0,
      "Total": 0,
      "Date & Time": "2023-11-18 03:50:27"
    },
    {
      "S.No": 9,
      "Payment Status": "pending",
      "Title": "Mr.",
      "Full Name": "Subbarayan Ragu",
      "Company Name": "IRA GROUP",
      "City": "",
      "State": "",
      "Country": "India",
      "Phone": "09515437406",
      "Contact Address": "iraconferences@gmail.com",
      "Email": "iraconferences@gmail.com",
      "Abstract Category": "Speaker (In-person)",
      "Registration type": "",
      "Package Name": "",
      "Package Amount": 599,
      "Subpackage Name": "",
      "Subpackage Amount": 0,
      "Total": 0,
      "Date & Time": "2023-11-15 20:05:51"
    },
    {
      "S.No": 10,
      "Payment Status": "pending",
      "Title": "Mr.",
      "Full Name": "Nagaraju A",
      "Company Name": "wcube",
      "City": "",
      "State": "",
      "Country": "India",
      "Phone": "9963363658",
      "Contact Address": "wcubein@gmail.com",
      "Email": "wcubein@gmail.com",
      "Abstract Category": "Speaker (In-person)",
      "Registration type": "",
      "Package Name": "",
      "Package Amount": 599,
      "Subpackage Name": "",
      "Subpackage Amount": 0,
      "Total": 0,
      "Date & Time": "2023-11-15 20:05:51"
    }];
  abstractHeadings = [
    "Date",
    "Title",
    "Fullname",
    "Email",
    "Mobileno",
    "Country",
    "Affiliation",
    "Address",
    "Category",
    "File"
  ];
  registractionHeadings = [
    "S.No",
    "Payment Status",
    "Title",
    "Full Name",
    "Company Name",
    "City",
    "State",
    "Country",
    "Phone",
    "Contact Address",
    "Email",
    "Abstract Category",
    "Registration type",
    "Package Name",
    "Package Amount",
    "Subpackage Name",
    "Subpackage Amount",
    "Total",
    "Date & Time"
  ]
  brocherHeadings = ['Date', 'Title', 'Fullname', 'Email', 'MobileNo', 'Country', 'Affiliation', 'Address']

  showData = [];
  showHeadings = [];
  showTitle:any = '';

  constructor() { }

  ngOnInit(): void {
    this.showData = this.brocherData;
    this.showHeadings = this.brocherHeadings;
    this.showTitle = 'Brocher Entries List';
  }


  viewEntries(type: string): void {
    if (type == 'brochure') {
      this.showData = this.brocherData
      this.showHeadings = this.brocherHeadings;
      this.showTitle = 'Brocher Entries List';
    } else if (type == 'abstract') {
      this.showData = this.abstractData
      this.showHeadings = this.abstractHeadings;
      this.showTitle = 'Abstract Entries List';
    } else {
      this.showData = this.registrationData
      this.showHeadings = this.registractionHeadings;
      this.showTitle = 'Registration Entries List';
    }
  }

}
