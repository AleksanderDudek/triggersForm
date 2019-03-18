import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

   form: FormGroup = new FormGroup({
    name: new FormControl('some name', Validators.required),
    triggerName: new FormControl('some trigger', Validators.required),
    triggerDateKnown: new FormControl(''),
    isInterimTrigger: new FormControl(false),
    interimTrigger: new FormControl('', Validators.required),
    constraintName: new FormControl('some constraint', Validators.required),
    constraintNameValue: new FormControl(''),
    effectiveDeadlineInfo: new FormControl('some info', Validators.required),
    relatedReferenceType: new FormControl(''),
    PURMA: new FormControl(false),
    NNTM: new FormControl(false),
    PDB: new FormControl(false),
    DSART: new FormControl(false),
    descriptions: new FormControl('')

  });

  initializeFormGroup() {
    this.form.setValue({
    name: '',
    triggerName: 'test',
    triggerDateKnown: 'option1',
    isInterimTrigger: false,
    interimTrigger: '1',
    constraintName: 'test',
    constraintNameValue: '1',
    effectiveDeadlineInfo: 'some info',
    relatedReferenceType: '',
    PURMA: false,
    NNTM: false,
    PDB: false,
    DSART: false,
    descriptions: 'you need to type 1 data on top to fulfill requirements'
    });
  }
}
