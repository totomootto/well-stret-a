import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  ControlContainer,
} from "@angular/forms";
import { Store } from "@ngrx/store";
import { addAction } from "../well-types.actions";
import { ActionApp } from "../models/action.model";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-add-action-form",
  templateUrl: "./add-action-form.component.html",
  styleUrls: ["./add-action-form.component.scss"],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class AddActionFormComponent implements OnInit {
  ngOnInit() {}
  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl("auto");
  action: ActionApp;

  constructor(
    fb: FormBuilder,
    private store: Store<{ addAction: ActionApp }>,
    f: NgForm
  ) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
      name: ["", Validators.required],
      type: ["", Validators.required],
      startDate: [new Date(), Validators.required],
      endDate: [new Date(), Validators.required],
      details: "",
    });
  }

  onSubmit(f) {
    console.log(f);

    console.log("שמור");
    var x = new ActionApp();
    //  var xx = this.options.value;
    x.name = this.options.value.name;
    x.type = this.options.value.type;
    x.startDate = this.options.value.startDate;
    x.endDate = this.options.value.endDate;
    x.details = this.options.value.details;

    this.store.dispatch(addAction({ x }));
  }
}
