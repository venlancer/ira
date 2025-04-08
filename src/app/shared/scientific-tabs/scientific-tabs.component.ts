import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-scientific-tabs',
  templateUrl: './scientific-tabs.component.html',
  styleUrls: ['./scientific-tabs.component.scss']
})
export class ScientificTabsComponent implements OnInit, OnChanges {
  @Input() scientificsessions: any;

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

    ngOnChanges(change:SimpleChanges) {
      this.scientificsessions.forEach(sessions => {
        sessions.items = sessions.items.split(',')
      });
      this.categories = this.scientificsessions;
    }

   onTabChange(newTabId: number) {
    console.log('Active tab changed to:', newTabId);
    // Additional logic if needed
  }

}
