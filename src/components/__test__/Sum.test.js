import { sum } from "../Sum";

test("Sum function should calculate the su, of twp numbers", () => {
    const result = sum(3, 4);

    expect(result).toBe(7);
});