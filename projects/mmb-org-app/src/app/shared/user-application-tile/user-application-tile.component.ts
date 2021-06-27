import { Component, OnInit, Input } from '@angular/core';
import { STAGES } from '../../applications-simplified/application-details/helpers/types/stages.const';

@Component({
  selector: 'mmb-org-app-user-application-tile',
  templateUrl: './user-application-tile.component.html',
  styleUrls: ['./user-application-tile.component.scss']
})
export class UserApplicationTileComponent implements OnInit {
  @Input() item;
  @Input() isDetailsEnabled: boolean = true;
  @Input() isInterestedTabActive: boolean;
  constructor() { }

  ngOnInit() {
  }

  /**
   * Returns stage name
   * @param stage stage id
   */
  getStageName(stage: number) {
    return STAGES.find((item) => {
      return parseInt(item.value) === stage;
    })
  }
}
