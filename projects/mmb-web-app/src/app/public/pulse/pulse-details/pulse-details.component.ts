import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'mmb-web-app-pulse-details',
  templateUrl: './pulse-details.component.html',
  styleUrls: ['./pulse-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PulseDetailsComponent implements OnInit {
  htmlString: string;
  htmlData: SafeHtml;
  constructor(private sanitizer: DomSanitizer, private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.pipe(
      map((params) => {
        let slug = params.slug;
        this._getHtmlContent(slug);
      })
    ).subscribe();
  }

  /**
   * Gets html content
   * @param slug 
   */
  private _getHtmlContent(slug: string) {
    const headers = new HttpHeaders({
      'responseType': 'text'
    });
    const request = this.http.get(`/assets/pulse/${slug}.html`, { responseType: 'text' })
      .subscribe(res => {
        this.htmlString = res;
        this.htmlData = this.sanitizer.bypassSecurityTrustHtml(this.htmlString); // this line bypasses angular security
      });


  }

}
