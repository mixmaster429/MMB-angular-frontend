import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Career } from '../../../shared/types/career.model';
import { CareerService } from '../../careers.service';

@Component({
	selector: 'mmb-web-app-similar-careers',
	templateUrl: './similar-careers.component.html',
	styleUrls: ['./similar-careers.component.scss']
})
export class SimilarCareersComponent implements OnInit {
	@Input() slug: string;
	@Input() showSimilarCareersButton: boolean;
	careers: Observable<Career[]>;

	constructor(private careerService: CareerService) { }

	ngOnInit() {
		this.careers = this.careerService.getSimilarCareers(this.slug);
	}

}
