import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Career } from '../../../shared/types/career.model';
import { CareerService } from '../../careers.service';

@Component({
	selector: 'mmb-web-app-suggested-careers',
	templateUrl: './suggested-careers.component.html',
	styleUrls: ['./suggested-careers.component.scss']
})
export class SuggestedCareersComponent implements OnInit {
  @Input() slug: string;
  careers: Observable<Career[]>;

  constructor(private careerService: CareerService) { }

  ngOnInit() {
    this.careers = this.careerService.getSuggestedCareers();
  }

}
