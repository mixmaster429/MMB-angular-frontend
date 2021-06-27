import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CANDIDATE_SUITABILITY } from '../../applications/types/candidate-suitability.enum';
import { APPLICATION_STAGE } from '../../applications/types/stage.enum';

@Component({
  selector: 'mmb-org-app-user-status-update',
  templateUrl: './user-status-update.component.html',
  styleUrls: ['./user-status-update.component.scss']
})
export class UserStatusUpdateComponent implements OnInit {
  public matDialogRef: MatDialogRef<UserStatusUpdateComponent>;
  stageOptions: APPLICATION_STAGE[] = [APPLICATION_STAGE.Screening, APPLICATION_STAGE.Shortlist, APPLICATION_STAGE.Interview, APPLICATION_STAGE.FinalInterview, APPLICATION_STAGE.Offer];
  candidateSuitability: CANDIDATE_SUITABILITY[] = [CANDIDATE_SUITABILITY.Fit, CANDIDATE_SUITABILITY.Good, CANDIDATE_SUITABILITY.NoFit, CANDIDATE_SUITABILITY.Perfect, CANDIDATE_SUITABILITY.Wildcard];
  @Input() isModalView: boolean = true;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
