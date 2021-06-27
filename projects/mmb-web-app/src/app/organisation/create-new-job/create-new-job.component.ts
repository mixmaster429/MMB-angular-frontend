import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { OrganisationService } from '../organisation.service';
import { Organisation } from '../types/organisation.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'mmb-web-app-create-new-job',
  templateUrl: './create-new-job.component.html',
  styleUrls: ['./create-new-job.component.scss']
})
export class CreateNewJobComponent implements OnInit {
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
