import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Career } from '../../../shared/types/career.model';
import { CareerService } from '../../careers.service';

@Component({
  selector: 'mmb-web-app-career-details-org-overview',
  templateUrl: './career-details-org-overview.component.html',
  styleUrls: ['./career-details-org-overview.component.scss']
})
export class CareerDetailsOrgOverviewComponent implements OnInit {
  @Input() career: Career;
  careers: Observable<Career[]>;

  constructor(private careerService: CareerService) { }

  ngOnInit() {
    console.log(this.career);
    this.careers = this.careerService.getCareersByOrg(this.career.organisation.uuid);
  }

}
