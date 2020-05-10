import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-actions",
  templateUrl: "./actions.component.html",
  styleUrls: ["./actions.component.scss"],
})
export class ActionsComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  details = "tt";
  name = "tt";
  type = "tt";
  date = new Date();

  ngOnInit() {}
  clickAddAction() {
    console.log("add action");
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  onSubmit(f) {
    console.log(f);
    console.log(this.details);
    console.log(this.name);
    console.log(this.type);
    console.log(this.date);
  }
}

@Component({
  selector: "dialog-content-example-dialog",
  templateUrl: "dialog-content-example-dialog.html",
  styleUrls: ["./actions.component.scss"],
})
export class DialogContentExampleDialog {}
