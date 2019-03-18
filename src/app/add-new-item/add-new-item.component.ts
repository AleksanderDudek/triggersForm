import { Component, OnInit } from '@angular/core';
import { ValidatorService } from '../validator/validator.service'

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.scss']
})
export class AddNewItemComponent implements OnInit {

  constructor(private validatorService: ValidatorService) {
  }

  ngOnInit() {
  }

  checkState() {
    console.log(this.validatorService.form)
  }

  onClear() {
    this.validatorService.form.reset();
    this.validatorService.initializeFormGroup();
  }
}
