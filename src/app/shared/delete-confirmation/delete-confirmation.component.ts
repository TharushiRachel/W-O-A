import { Component, EventEmitter, HostListener, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.scss']
})
export class DeleteConfirmationComponent{

  message: string = "Are you sure want to delete?"
  confirmButtonText = "Confirm"
    cancelButtonText = "Cancel"
    constructor(@Inject(MAT_DIALOG_DATA) private data: any, private dialogRef: MatDialogRef<DeleteConfirmationComponent>) {
        if(data){
            this.message = data.message || this.message;
            if (data.buttonText) {
                this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
                this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
            }
        }
    }
 
    onConfirmClick(): void {
        this.dialogRef.close(true);
    }

    onCancelClick(): void {
        this.dialogRef.close(true);
    }
}
