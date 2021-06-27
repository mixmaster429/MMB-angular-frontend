import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { InitiativesService } from '../../initiatives.service';
import { Initiative } from '../../types/initiative.model';

@Component({
  selector: 'mmb-web-app-experience-summary-info',
  templateUrl: './experience-summary-info.component.html',
  styleUrls: ['./experience-summary-info.component.scss']
})
export class ExperienceSummaryInfoComponent implements OnInit {
  @Input() experience: Initiative;
  @Output() register: EventEmitter<any> = new EventEmitter<any>();
  constructor(private initiativeService: InitiativesService,
    private toastr: ToastrService) { }

  ngOnInit() {
  }
  /**
   * Add career to favorites
   */
  onAddToFavorites(experience: Initiative) {
    this.initiativeService.addToFavorites(experience).subscribe((response) => {
      this.toastr.success('Added to your favourites!', 'Success');
      experience.saved = response;
    });
  }

  /**
   * Register/External application
   */
  onRegister() {
    this.register.emit();
  }

  /**
   * Remove career from favorites
   */
  onRemoveFromFavorites(experience: Initiative) {
    const uuid = experience.saved.uuid;
    this.initiativeService.removeFromFavorites(uuid).subscribe(() => {
      this.toastr.success('Removed from favourites!', 'Success');
      experience.saved = false;
    });
  }

  /**
   * User pressed i am interested button
   */
  onExpressInterest() {
    this.initiativeService.expressInterest(this.experience).subscribe((response: any) => {
      this.experience.interested = response;
      this.toastr.success('Expressed interest', 'Success');
    });
  }

  /**
   * Remove the interest
   */
  onRemoveInterest() {
    this.initiativeService.removeInterest(this.experience).subscribe((response: any) => {
      this.experience.interested = null;
      this.toastr.success('Removed the interest', 'Success');
    });
  }
}
