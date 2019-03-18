import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatChipsModule, MatOptionModule,
  MatGridListModule, MatProgressBarModule, MatSliderModule, MatSlideToggleModule, MatMenuModule,
    MatDialogModule, MatSnackBarModule, MatSelectModule, MatInputModule, MatSidenavModule, MatCardModule,
  MatIconModule, MatRadioModule, MatProgressSpinnerModule, MatTabsModule, MatListModule, MatTableModule,
  MatSortModule } from '@angular/material';

@NgModule({
  imports: [
    MatSortModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatChipsModule, MatOptionModule, MatGridListModule, MatProgressBarModule, MatSliderModule, MatSlideToggleModule, MatMenuModule, MatDialogModule, MatSnackBarModule, MatSelectModule, MatInputModule, MatSidenavModule, MatCardModule, MatIconModule, MatRadioModule, MatProgressSpinnerModule, MatTabsModule,MatListModule, MatTableModule
  ],
  exports: [
    MatSortModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatChipsModule, MatOptionModule, MatGridListModule, MatProgressBarModule, MatSliderModule, MatSlideToggleModule, MatMenuModule, MatDialogModule, MatSnackBarModule, MatSelectModule, MatInputModule, MatSidenavModule, MatCardModule, MatIconModule, MatRadioModule, MatProgressSpinnerModule, MatTabsModule, MatListModule, MatTableModule
  ],
})
export class AppMaterialModule { }
