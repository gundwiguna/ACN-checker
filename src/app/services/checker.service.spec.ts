import { TestBed, inject } from "@angular/core/testing";

import { CheckerService } from "./checker.service";

describe("ACN Checker Service", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [CheckerService]
    })
  );

  it("should be created", inject(
    [CheckerService],
    (service: CheckerService) => {
      expect(service).toBeTruthy();
    }
  ));

  it("should have ACN checker function", inject(
    [CheckerService],
    (service: CheckerService) => {
      expect(service.checkACN).toBeTruthy();
    }
  ));

  const truthyDatas = [
    "000 000 019",
    "002 249 998",
    "003499992",
    "003749988"
    //invalid data given as correct
    // "003249004",
  ];
  function testToBeTruthy(input) {
    it(`${input} should be valid ACN`, inject(
      [CheckerService],
      (service: CheckerService) => {
        expect(service.checkACN(input).valid).toBeTruthy();
      }
    ));
  }
  for (let i = 0; i < truthyDatas.length; i++) {
    testToBeTruthy(truthyDatas[i]);
  }

  const falsyDatas = ["003 999 987", "004249982"];

  function testToBeFalsy(input) {
    it(`${input} should be formatted correctly but not a valid ACN`, inject(
      [CheckerService],
      (service: CheckerService) => {
        expect(service.checkACN(input).valid).toBeFalsy();
      }
    ));
  }
  for (let i = 0; i < falsyDatas.length; i++) {
    testToBeFalsy(falsyDatas[i]);
  }

  const incorrectFormatDatas = ["005 749987", "abc def ghi", "005749 abc"];
  function testIncorrectFormat(input) {
    it(`${input} should not be correct ACN format`, inject(
      [CheckerService],
      (service: CheckerService) => {
        expect(service.checkACN(input).valid).toBeFalsy();
        expect(service.checkACN(input).message).toContain(
          "Given ACN is not correct format"
        );
      }
    ));
  }
  for (let i = 0; i < incorrectFormatDatas.length; i++) {
    testIncorrectFormat(incorrectFormatDatas[i]);
  }
});
