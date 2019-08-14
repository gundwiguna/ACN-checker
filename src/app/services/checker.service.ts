import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CheckerService {
  number;
  constructor() {}

  checkACN(givenACN: String) {
    const regexNumber = new RegExp(/^([0-9]{9})$/g);
    const regexASIC = new RegExp(/^((([0-9]{3})\s){2}[0-9]{3})$/g);

    if (!givenACN || (!givenACN.match(regexASIC) && !givenACN.match(regexNumber)))
      return { valid: false, message: "Given ACN is not correct format!" };

    let inputNumber = givenACN.replace(/\s/g, "");
    let productSum = 0;
    for (let i = 0; i < inputNumber.length - 1; i++) {
      productSum += +inputNumber[i] * (inputNumber.length - i - 1);
    }
    const checkDigit = (function() {
      const complement = 10 - (productSum % 10);
      return complement == 10 ? 0 : complement;
    })();

    if (checkDigit == +inputNumber.substring(inputNumber.length - 1)) {
      return { valid: true, message: "Given ACN is valid!" };
    }
    return { valid: false, message: "Given number is not a valid ACN!" };
  }
}
