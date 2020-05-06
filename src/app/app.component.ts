import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { increment, decrement, reset } from "./store/counter.actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "well-street";
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select("count"));
  }
  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
