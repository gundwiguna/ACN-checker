import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CheckerService {
  number;
  constructor() {}

  isValidACN(acn:String) {
    const regex = /([0-9]{9})/;
    const regexASIC = /((([0-9]{3})\s){2}[0-9]{3})/;
    if (!acn || acn.length !== 11 && !acn.match(regexASIC) && !acn.match(regex)) 
      return { valid: false, message: "Given ACN is not correct format!" };

    let inputNumber = acn.replace(/\s/g, '')
    let productSum = 0;
    for (let i = 0; i < inputNumber.length - 1; i++) {
      productSum += +inputNumber[i] * (inputNumber.length - i - 1);
      console.log(`${+inputNumber[i]} * ${(inputNumber.length - i - 1)} = ${+inputNumber[i] * (inputNumber.length - i - 1)}`)
    }
    const checkDigit = (function() {
      const complement = 10 - (productSum % 10);
      if (complement == 10) return 0;
      else return complement;
    })();

    if (checkDigit == +inputNumber.substring(inputNumber.length - 1)) {
      return { valid: true, message: "Given ACN is valid!" };
    } else {
      return { valid: false, message: "Given number is not a valid ACN!" };
    }
  }
}
