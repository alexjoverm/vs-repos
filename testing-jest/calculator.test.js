import Calculator from "./calculator";

describe("Calculator", () => {
  it("should be instanceable", () => {
    expect(new Calculator()).toBeInstanceOf(Calculator);
  });

  describe("add", () => {
    it("should sum up 2 numbers", () => {
      const calculator = new Calculator();
      expect(calculator.add(3, 2)).toBe(5);
    });

    it("should throw an Error if less than 2 args are supplied", () => {
      const calculator = new Calculator();
      expect(() => calculator.add(3)).toThrow("2 arguments are required");
    });

    it("should throw an Error if the arguments are not numbers", () => {
      const calculator = new Calculator();
      expect(() => calculator.add(3, "2")).toThrow(
        Error("The arguments must be numbers")
      );
    });
  });

  describe("subtract", () => {
    it("should subtract 2 numbers", () => {
      const calculator = new Calculator();
      expect(calculator.subtract(3, 2)).toBe(1);
    });
  });
});
