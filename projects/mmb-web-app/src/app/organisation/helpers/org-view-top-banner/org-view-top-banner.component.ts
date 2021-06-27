import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'mmb-web-app-org-view-top-banner',
  templateUrl: './org-view-top-banner.component.html',
  styleUrls: ['./org-view-top-banner.component.scss']
})
export class OrgViewTopBannerComponent implements OnInit {
  isViewingAsMember: boolean;
  @Input() logo: string;
  @Input() name: string;
  @Input() isMainPage: boolean = true;
  @Input() slug: string;
  @Output() isViewingAsMemberChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.pipe(
      map(params => {
        if (params.preview && params.preview !== 'false') {
          this.isViewingAsMember = params.preview;
          this.isViewingAsMemberChanged.emit(this.isViewingAsMember);
        }
      })).subscribe();
  }

  /**
   * View as member activated
   */
  onViewAsMember() {
    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: { 'preview': true },
        queryParamsHandling: 'merge',
      });
    this.isViewingAsMember = true;
    this.isViewingAsMemberChanged.emit(this.isViewingAsMember);
  }

  /**
   * View as admin activated
   */
  onViewAsAdmin() {
    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: { 'preview': false },
        queryParamsHandling: 'merge',
      });

    this.isViewingAsMember = false;
    this.isViewingAsMemberChanged.emit(this.isViewingAsMember);
  }

  /**
   * Go back to main page
   */
  goBack() {
    this.router.navigate([`/organisation/customize/${this.slug}`])
  }
}
