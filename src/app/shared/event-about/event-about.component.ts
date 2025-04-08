import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-about',
  templateUrl: './event-about.component.html',
  styleUrls: ['./event-about.component.scss']
})
export class EventAboutComponent implements OnInit, OnChanges {
  @Input() description!: string;
  public pageName: string | null = null;
  public formattedContent = ''
  public contentString = "Dear Colleagues,\n\nThe International Conference on Pharmaceutical Sciences and Clinical Research (IRA Pharma 2025) will be in **Singapore, Singapore** from **April 14th-15th, 2025**. The congress will be proudly Organized by the **IRA Group**, with over **2000 Pharma Researchers**. We hope that this event will bring us back to our regular congress routine and that we will be able to see each other in person, rekindle researchers, collaborations, and establish new ones.\n\nThis **IRA Pharma 2025** will bring us up to date in the broad field of **Pharma**, from tropical **Pharmaceutical Sciences and Clinical Research**. The Scientific Program and Teaching Programs are at the core of the **IRA Pharma 2025**. These are complemented by **plenary lectures** from leading experts in their fields, the exciting and entertaining **Tournament of the Minds**, cutting edge scientific sessions relevant to all the corners of the globe, and **poster sessions** that will feature the research of young neurologists of the future.\n\nIn addition to learning and science, the **IRA Pharma** offers an excellent opportunity for communication and exchange. The Conference rotates among different regions of the world, all with different **health systems**, different backgrounds, different **neurological challenges**, and different needs. This congress will be a valuable forum for exchange of clinical experience, of personal trajectories, of science and to mentor and nurture the next generation.\n\nThe **IRA Group** will provide congress bursaries for young neurologists to attend Conference in person from **low/low-middle income countries**.\n\nFor the **IRA Group** and its Associates, this Annual meeting is an opportunity to highlight the global reality of our neurological world. We hope you will be able to join us for what will be an **exceptional meeting**!\n\n**IRA Group** will bring together leading scientists, public health experts, policymakers to translate recent momentous scientific advances into action that will address means to end the epidemic, within the current context of significant global economic challenges.\n\n**IRA Pharma 2025** will have a positive impact on the topics of the congress response globally with the following objectives.\n\n1. To bring together the world’s scientific experts to catalyze and advance scientific knowledge about **Pharma and Clinical Research**, present the most recent research findings, and promote and enhance scientific collaborations around the world.\n2. To bring together community leaders, scientists, and policy leaders to promote and enhance programmatic collaborations to more effectively address regional, national and local responses to **Pharma** around the world and overcome barriers that limit access to prevention, care and services.\n3. To engage key, new and non-traditional stakeholders throughout the world in the development of and participation throughout the congress program.";



  constructor(private router: Router,private route: ActivatedRoute) { 
    this.formattedContent = this.contentString
    .replace(/\n/g, '<br>') // Replace newlines with <br>
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.pageName = params['pageName'];
    });
  }

  ngOnChanges(change:SimpleChanges) {
    this.formattedContent = this.description    
    .replace(/\n/g, '<br>') // Replace newlines with <br>
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  }

  goToAbstractSubmission() {
    this.router.navigate(['abstract-submission'], { relativeTo: this.route });
  }

}
