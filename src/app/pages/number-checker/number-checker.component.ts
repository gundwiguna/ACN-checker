import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { CheckerService } from "../../services/checker.service";

@Component({
  selector: "app-number-checker",
  templateUrl: "./number-checker.component.html",
  styleUrls: ["./number-checker.component.scss"]
})
export class NumberCheckerComponent implements OnInit {
  numberForm;
  showMessage: Boolean = false;
  isValid: Boolean;
  message: String = "";
  timeout;

  constructor(
    private checkerService: CheckerService,
    private formBuilder: FormBuilder
  ) {
    this.numberForm = this.formBuilder.group({
      number: ""
    });
  }

  ngOnInit() {}

  onSubmit() {
    const result = this.checkerService.checkACN(this.numberForm.value.number);
    this.triggerMessage(result);
  }

  triggerMessage(result) {
    clearTimeout(this.timeout)
    this.showMessage = true;
    this.isValid = result.valid;
    this.message = result.message;
    this.timeout = setTimeout(() => {
      this.showMessage = false;
    }, 3000);
  }
}
