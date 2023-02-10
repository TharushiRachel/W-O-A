import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'search-groups-form',
  templateUrl: './search-groups-form.component.html',
  styleUrls: ['./search-groups-form.component.scss']
})
export class SearchGroupsFormComponent implements OnInit {
  @Input()
  searchGroupsForm: FormGroup;


  @Output()
  search = new EventEmitter<any>();

  @Output()
  refresh = new EventEmitter<any>();

  contractType = this._formBuilder.group({
    active: false,
    inactive: false,
  });

  constructor(public _formBuilder: FormBuilder) {
  }


  @HostListener('document:click', ['$event']) documentClickEvent($event: MouseEvent) {
  }

  ngOnInit(): void {

    //this.bindCompanyTypes(this.companyTypes)
    //this.setValues(this.companyTypes,this.searchCompanyForm.get('company_types').value)
  }

  public onSubmit(clear = false) {
    if (clear) {
      this.refresh.emit(clear);
    } else {
      this.search.emit();
    }
  }

}
