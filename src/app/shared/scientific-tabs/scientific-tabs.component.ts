import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scientific-tabs',
  templateUrl: './scientific-tabs.component.html',
  styleUrls: ['./scientific-tabs.component.scss']
})
export class ScientificTabsComponent implements OnInit {

  public  categories = [
    {
      title: 'Drug Discovery',
      items: [
        'Drug Discovery & Development',
        'Drug Delivery Systems',
        'Medicinal Chemistry',
        'Biopharmaceutics',
        'Drug Formulation',
        'Pharmaceutical Sciences',
        'Medical Devices & Diagnostics',
        'Biopharmaceutics',
        'Drug Formulation',
        'Pharmaceutical Sciences',
        'Medical Devices & Diagnostics'
      ]
    },
    {
      title: 'Pharmacology',
      items: [
        'Pharmacology & Toxicology',
        'Clinical Trials & Regulatory Approval',
        'Therapeutics',
        'Pain Management',
        'Cancer Biology & Oncology',
        'Pharmacoepidemiology & Pharmacovigilance'
      ]
    },
    {
      title: 'Healthcare',
      items: [
        'Nursing & Midwifery',
        'Healthcare Management & Economics',
        'Digital Healthcare & e-Health',
        'Infectious Diseases',
        'COVID-19 Innovations',
        'Gynaecology & Obstetrics',
        'Reproductive Health'
      ]
    },
    {
      title: 'Biological Sci.',
      items: [
        'Immunology',
        'Neuroscience',
        'Microbiology & Virology',
        'Stem Cells & Regenerative Medicine',
        'Bioinformatics',
        'Bioengineering'
      ]
    },
    {
      title: 'Pharmacy Practice',
      items: [
        'Pharmacy Practice',
        'Pharmacy & Pharmacists',
        'Pharmaceutical Analysis',
        'Pharmaceutical Biotechnology',
        'Pharmaceutics'
      ]
    }
  ];
  public activeTab = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

   onTabChange(newTabId: number) {
    console.log('Active tab changed to:', newTabId);
    // Additional logic if needed
  }

}
