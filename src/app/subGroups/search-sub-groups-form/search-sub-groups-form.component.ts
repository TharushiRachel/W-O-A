import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'search-sub-groups-form',
  templateUrl: './search-sub-groups-form.component.html',
  styleUrls: ['./search-sub-groups-form.component.scss']
})
export class SearchSubGroupsFormComponent implements OnInit {
  @Input()
  SearchSubGroupsForm: FormGroup;


  @Output()
  search = new EventEmitter<any>();

  @Output()
  refresh = new EventEmitter<any>();

  constructor(public _formBuilder: FormBuilder) {
  }


  @HostListener('document:click', ['$event']) documentClickEvent($event: MouseEvent) {
  }

  ngOnInit(): void {

  }

  public onSubmit(clear = false) {
    if (clear) {
      this.refresh.emit(clear);
    } else {
      this.search.emit();
    }
  }

}
