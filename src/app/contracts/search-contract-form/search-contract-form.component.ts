import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'search-contract-form',
  templateUrl: './search-contract-form.component.html',
  styleUrls: ['./search-contract-form.component.scss']
})
export class SearchContractFormComponent implements OnInit {
  @Input()
  searchContractForm: FormGroup;


  @Output()
  search = new EventEmitter<any>();

  @Output()
  refresh = new EventEmitter<any>();

  contractType = this._formBuilder.group({
    active: false,
    inactive: false,
    numberOfDay: false,
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

  // public setValues(value, queryParams) {
  //   const selectedTypes = queryParams;
  //   const ctrl = this.searchCompanyForm.controls.company_types;
  //   ctrl['controls'].forEach(e => {
  //     if (selectedTypes === undefined || selectedTypes.length == 0) {
  //       // array empty or does not exist
  //     } else {
  //       if (selectedTypes.indexOf(e.get('id').value + '') !== -1) {
  //         e.get('selected').setValue(true);
  //       } else {
  //         e.get('selected').setValue(false);
  //       }
  //     }
  //   });
  // }

}
