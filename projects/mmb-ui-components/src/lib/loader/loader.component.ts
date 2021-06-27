import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { isLoaderVisible } from './loader.selector';
@Component({
  selector: 'mmb-ui-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  isLoading: Observable<boolean>;
  
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.isLoading = this.store.pipe(
      select(isLoaderVisible)
    );
  }
}
