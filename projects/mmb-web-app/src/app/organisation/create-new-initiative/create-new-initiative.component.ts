import { Component, OnInit } from '@angular/core';
import { Organisation } from '../types/organisation.model';
import { OrganisationService } from '../organisation.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';

@Component({
  selector: 'mmb-web-app-create-new-initiative',
  templateUrl: './create-new-initiative.component.html',
  styleUrls: ['./create-new-initiative.component.scss']
})
export class CreateNewInitiativeComponent implements OnInit {
  isLoading: boolean = true;
  organisationDetails: Organisation;
  slug: string;

  constructor(private orgService: OrganisationService,
    private route: ActivatedRoute,
    private toastrService: ToastrService) { }

  ngOnInit() {
    this.route.params.pipe(
      map((params) => {
        if (params.slug) {
          this.slug = params.slug;
          // send api call to load organisation
          this.orgService.getOrganisationDetails(params.slug).subscribe((response) => {
            this.organisationDetails = response;
            this.isLoading = false;
          }, (err) => {
            this.toastrService.error('Error in loading organanisation details', 'Error');
            this.isLoading = false;
          })
        }
      })
    ).subscribe();
  }

}
