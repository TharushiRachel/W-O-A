import {Component, HostListener, Inject} from '@angular/core';
// @ts-ignore
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'm-delete-contract-confirmation',
  templateUrl: './delete-contract-confirmation.component.html'
})
export class DeleteContractConfirmationComponent {
  constructor(
    private dialogRef: MatDialogRef<DeleteContractConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  @HostListener('window:keyup.esc') onKeyUp() {
    this.dialogRef.close();
  }

  /**
   * Close dialog
   */
  cancel(): void {
    this.dialogRef.close({confirmed: false});
  }

  /**
   * Confirms delete po detail confirmation component
   */
  confirm() {
    this.dialogRef.close({confirmed: true});
  }
}
