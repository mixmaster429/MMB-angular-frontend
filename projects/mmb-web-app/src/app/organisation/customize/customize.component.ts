import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { OrganisationService } from '../organisation.service';
import { ToastrService } from 'ngx-toastr';
import { Organisation } from '../types/organisation.model';

@Component({
  selector: 'mmb-web-app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.scss']
})
export class CustomizeComponent implements OnInit {
  organisationDetails: Organisation;
  isLoading: boolean;
  isViewingAsMember: boolean;
  
  constructor(private route: ActivatedRoute,
    private orgService: OrganisationService,
    private toastrService: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.isLoading = true;
    this.route.params.pipe(
      map((params) => {
        if (params.slug) {
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
