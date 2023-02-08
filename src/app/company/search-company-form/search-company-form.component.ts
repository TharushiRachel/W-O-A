import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'search-company-form',
  templateUrl: './search-company-form.component.html',
  styleUrls: ['./search-company-form.component.scss']
})
export class SearchCompanyFormComponent implements OnInit {
  @Input()
  searchCompanyForm: FormGroup;

  @Output()
  search = new EventEmitter<any>();

  @Output()
  refresh = new EventEmitter<any>();

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
