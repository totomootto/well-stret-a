import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  Self,
  Optional,
  forwardRef,
} from "@angular/core";
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  Validator,
  AbstractControl,
  ValidatorFn,
  Validators,
  NG_VALIDATORS,
  NgControl,
  NgForm,
  ValidationErrors,
} from "@angular/forms";

import * as moment from "moment";

@Component({
  selector: "app-generic-input-date",
  templateUrl: "./generic-input-date.component.html",
  styleUrls: ["./generic-input-date.component.scss"],
})
export class GenericInputDateComponent
  implements ControlValueAccessor, Validator, OnInit {
  @ViewChild("input", { static: false }) input: ElementRef;
  disabled;

  @Input() type = "date";
  @Input() isRequired: boolean = false;
  @Input() pattern: string = null;
  @Input() label: string = null;
  @Input() placeholder: string;
  @Input() errorMsg: string;

  constructor(@Self() public controlDir: NgControl) {
    this.controlDir.valueAccessor = this;
  }

  ngOnInit() {
    const control = this.controlDir.control;
    const validators: ValidatorFn[] = control.validator
      ? [control.validator]
      : [];
    if (this.isRequired) {
      validators.push(Validators.required);
    }
    if (this.pattern) {
      validators.push(Validators.pattern(this.pattern));
    }
    validators.push(this.dateSmaleFromNow);

    control.setValidators(validators);
    control.updateValueAndValidity();
  }

  onChange(event) {}

  onTouched() {}

  writeValue(obj: any): void {
    this.input.nativeElement.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  validate(c: AbstractControl): { [key: string]: any } {
    const validators: ValidatorFn[] = [];
    if (this.isRequired) {
      validators.push(Validators.required);
    }

    if (this.pattern) {
      validators.push(Validators.pattern(this.pattern));
    }

    var now = new Date();

    if (
      this.input &&
      this.input.nativeElement &&
      this.input.nativeElement.value < now
    ) {
      validators.push(Validators.compose(null));
    }

    return validators;
  }

  dateSmaleFromNow: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    var now = new Date();
    if (
      this.input &&
      this.input.nativeElement &&
      this.input.nativeElement.value &&
      moment(this.input.nativeElement.value)
        .startOf("day")
        .diff(moment(now).startOf("day")) < 0
    ) {
      return { dateSmaleFromNow: true };
    } else {
      return null;
    }
  };
}
// providers: [{ provide: NG_VALIDATORS, useExisting: IdentityRevealedValidatorDirective, multi: true }]

// export class IdentityRevealedValidatorDirective implements Validator {
//   validate(control: AbstractControl): ValidationErrors {
//     return identityRevealedValidator(control)
//   }
// }

/** A hero's name can't match the hero's alter ego */
// export const dateSmaleFromNow: ValidatorFn = (
//   control: AbstractControl
// ): ValidationErrors | null => {
//   var now = new Date();
//   if (
//     this.input &&
//     this.input.nativeElement &&
//     this.input.nativeElement.value < now
//   ) {
//     return { dateSmaleFromNow: true };
//   } else {
//     return null;
//   }
// };
