import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NumberCheckerComponent } from "./number-checker.component";
import { ReactiveFormsModule } from "@angular/forms";

describe("NumberCheckerComponent", () => {
  let component: NumberCheckerComponent;
  let fixture: ComponentFixture<NumberCheckerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NumberCheckerComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should run function on button clicked", async(() => {
    spyOn(component, "onSubmit");
    let button = fixture.debugElement.nativeElement.querySelector("button");
    button.click();
    fixture.whenStable().then(() => {
      expect(component.onSubmit).toHaveBeenCalled();
    });
  }));
});
