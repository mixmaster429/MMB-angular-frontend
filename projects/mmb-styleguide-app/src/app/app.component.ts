import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoaderActionTypes } from '@mmb-ui/src/public-api';

@Component({
  selector: 'mmb-styleguide-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mmb-styleguide-app';
  constructor(private store: Store<any>) { }
  /**
   * Shows loader
   */
  showLoader() {
    this.store.dispatch({ 
      type: LoaderActionTypes.ShowLoader
    });
  }

  /**
   * Hides loader
   */
  hideLoader() {
    this.store.dispatch({ 
      type: LoaderActionTypes.HideLoader
    });
  }
}
