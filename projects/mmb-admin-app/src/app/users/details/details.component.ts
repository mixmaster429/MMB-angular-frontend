import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { UsersService } from '../users.service';
import { Observable } from 'rxjs';
import { User } from '../../shared/types/user.model';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators';
import { UserAnalytics } from '../types/user-analytics.model';

@Component({
  selector: 'mmb-admin-app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [fuseAnimations]
})
export class DetailsComponent implements OnInit {
  details: Observable<User>;
  analytics: Observable<UserAnalytics>;
  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.details = this.route.params.pipe(
      map((p => p.id)),
      tap((id) => {
        this.analytics = this.usersService.getUserAnalytics(id);
      }),
      switchMap((id) => {
        return this.usersService.getUserDetails(id);
      })
    );
  }

  /**
   * Maps numeric value to class for color
   * @param value 
   */
  getBadgeColor(value) {
    switch (value) {
      case 1: 
        return 'success';
      case 2:
        return 'success-200';
      case 3:
        return 'yellow';
      case 4:
        return 'warn-200';
      case 5:
        return 'warn';
    }
  }
}
