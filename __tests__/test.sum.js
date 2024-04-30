import { sum } from "../src/sum"

test("Sum function should add two numbers", () => {
    const result = sum(10, 20);
    expect(result).toBe(30);
});