import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-add-action-form",
  templateUrl: "./add-action-form.component.html",
  styleUrls: ["./add-action-form.component.scss"],
})
export class AddActionFormComponent implements OnInit {
  ngOnInit() {}
  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl("auto");

  constructor(fb: FormBuilder) {
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

  saveForm() {
    console.log("שמור");
  }
}
