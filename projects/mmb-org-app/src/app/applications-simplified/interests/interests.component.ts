import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fuseAnimations } from '@fuse/animations';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { ApplicationsSimplifiedService } from '../applications-simplified.service';

@Component({
  selector: 'mmb-org-app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class InterestsComponent implements OnInit {
  offset: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  limit: BehaviorSubject<number> = new BehaviorSubject<number>(20);
  searchInput: FormControl = new FormControl();
  applications: any = [];
  filterTerm: string;
  isLoadingMore: boolean;

  constructor(private applicationsService: ApplicationsSimplifiedService,
    private _fuseProgressBarService: FuseProgressBarService,) { }

  ngOnInit() {
    setTimeout(() => this._fuseProgressBarService.show());
    combineLatest(this.offset).subscribe(() => {
      this.getCareers();
    });
  }

  getCareers() {
    return this.applicationsService.getCareers(this.offset.value, this.limit.value).subscribe(res => {
      this.applications.push(...res);
      setTimeout(() => this._fuseProgressBarService.hide());
      this.isLoadingMore = false;
    }, (err) => {
      this._fuseProgressBarService.hide();
      this.isLoadingMore = false;
    });
  }

  getRandomClass(application: any) {
    if (!application.allocatedClass) {
      let availableClasses = ['light-blue-fg', 'orange-fg', 'red-fg', 'blue-grey-fg'];
      let index = Math.floor((Math.random() * 4));
      application.allocatedClass = availableClasses[index];
      return availableClasses[index];
    }
    return application.allocatedClass;
  }
}
