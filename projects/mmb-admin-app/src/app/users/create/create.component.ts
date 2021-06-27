import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { fuseAnimations } from '@fuse/animations';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../../shared/types/user.model';
import { PageType } from '../types/page-type.enum';

@Component({
  selector: 'mmb-admin-app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [fuseAnimations]
})
export class CreateComponent implements OnInit {
  pageType: PageType;
  userForm: FormGroup;
  user: User;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) {
    this.user = new User();
  }

  ngOnInit() {
    this.route.params.pipe(
      map(p => p.id),
      tap((id) => {
        if (!id) {
          this.pageType = PageType.NEW;
        } else {
          this.pageType = PageType.EDIT;
        }
        this.userForm = this.createUserForm();
      })
    ).subscribe()
  }

  /**
 * Create user form
 *
 * @returns {FormGroup}
 */
  createUserForm(): FormGroup {
    return this.formBuilder.group({
      name: [this.user.details.name],
      image: [this.user.details.image],
      location: [this.user.details.location],
      professionalTitle: [this.user.details.professionalTitle],
      languages: [this.user.languages]
    });
  }

}
